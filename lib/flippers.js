import http from 'http';
import https from 'https';

export default class flippers {
  static getAllItemData() {
    return new Promise((resolve, reject) => {
      const options = {
        host: 'rsbuddy.com',
        path: '/exchange/summary.json',
      };

      https.get(options, (response) => {
        let body = '';

        response.on('data', (chunk) => {
          body += chunk;
        });

        response.on('end', () => {
          resolve(JSON.parse(body));
        });
      }).on('error', (error) => {
        reject(`Error: ${error.message}`);
      });
    });
  }

  static getItemById(id) {
    return new Promise((resolve, reject) => {
      const options = {
        host: 'api.rsbuddy.com',
        path: `/grandExchange?a=guidePrice&i=${id}`,
      };

      http.get(options, (response) => {
        let body = '';

        response.on('data', (chunk) => {
          body += chunk;
        });

        response.on('end', () => {
          resolve(JSON.parse(body));
        });
      }).on('error', (error) => {
        reject(`Error: ${error.message}`);
      });
    });
  }
}
