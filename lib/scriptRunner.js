import flippers from './flippers';

flippers.getAllItemData().then((response) => {
  console.log(response);
});

// flippers.getItemById(554).then((response) => {
// console.log(response);
// });

// for (let id = 1; id < 20739; id += 1) {
//   flippers.getItemById(id).then((response) => {
//     console.log(response);
//   });
// }