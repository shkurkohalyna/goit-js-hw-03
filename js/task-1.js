// const logItems = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// for (let i = 0; i <= logItems.length - 1; i += 1) {
//   logItems[i] += `-${i + 1}`;
// }
// console.table(logItems);

// const logItems = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];

// for (let i = 0; i < logItems.length; i += 1) {
//   console.log(`${i + 1} - ${logItems[i]}`);
// }

const getItemsString = function (array) {
  "use strict";
  let result = "";
  for (let i = 0; i < array.length; i += 1) {
    result += `${i + 1} - ${array[i]}\n`;
  }
  return result;
};

console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
