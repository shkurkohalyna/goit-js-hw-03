// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число.Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо
// посчитать сумму всех элементов массива и записать ее в переменную total.
// Используй цикл for или for...of.После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
//  Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов,
//     не обязательно.Если хочешь, в случае некорректного ввода, показывай alert с
// текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно,
//     после чего снова пользователю предлагается ввести число в prompt.

let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt("ввести число: ");
  numbers.push(input);
  if (input === null) {
    break;
  } else if (input === "") {
    alert("Было введено не число, попробуйте еще раз!");
    continue;
  } else if (isNaN(parseInt(input))) {
    alert("Было введено не число, попробуйте еще раз!");
    continue;
  }
  total += Number.parseInt(input);
}
console.log(numbers);
alert("Общая сумма чисел равна: " + total);

// function mapArray(array) {
//     'use strict';
//     const numbers = new Array(array.length);
//     for (let i = 0; i < array.length; i += 1) {
//         // Write code under this line
//         numbers[i] = array[i] * 10;
//     }
//     return numbers;
// }
// console.log(mapArray([-2, 0, 2]));
// //
// // [-20, 0, 20]
// console.log(mapArray([-2.5, 0, 2.5]));

// function filterArray(array) {
//   "use strict";
//   const numbers = [];

//   for (let i = 0; i < array.length; i += 1) {
//     if (Number.isFinite(array[i])) numbers.push(array[i]);
//   }
//   return numbers;
// }
// console.log(filterArray([-2, 0, 2]));
// //
// // [-2, 0, 2]
// console.log(filterArray([1, NaN, Infinity]));
// //
// // [1]
// console.log(filterArray([0, -0, 100, "100"]));
// //
// // [0, 0, 100]
// console.log(filterArray([undefined, false, null, [], 1]));
// //
// // [1]
// console.log(filterArray([{}, () => {}, 2]));

// function reduceArray(array) {
//   "use strict";
//   let total = 0;
//   // Write code under this line
//   for (let i = 0; i < array.length; i += 1) {
//     total += array[i];
//   }
//   return total;
// }
// console.log(reduceArray([1, 2, 3]));
