import http from 'http';
import https from 'https';

export default class flippers {
  static getAllItemData() {
    const options = {
      host: 'rsbuddy.com',
      path: '/exchange/summary.json',
    };

    https.get(options, (response) => {
      console.log(`Got Response Code: ${response.statusCode}`);

      let body = '';

      response.on('data', (chunk) => {
        body += chunk;
      });

      response.on('end', () => {
        console.log('No more data in response');
        const results = JSON.parse(body);
        console.log(results);
        return results;
      });
    }).on('error', (error) => {
      console.log(`Error: ${error.message}`);
    });
  }

  static getItemById(id) {
    const options = {
      host: 'api.rsbuddy.com',
      path: `/grandExchange?a=guidePrice&i=${id}`,
    };
  }
}
