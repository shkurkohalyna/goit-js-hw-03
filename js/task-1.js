// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ: значение используя Object.keys() и for...of

let message = "";
const user = {
  age: 20,
  hobby: "html",
  name: "Mango",
  premium: true,
};
user.mood = "happy";
user["full time"] = true;

user.hobby = "skydiving";
user.premium = false;

const keys = Object.keys(user);
for (const key of keys) {
  message += `${key} : ${user[key]}\n`;
} // Write code under this line

console.log(message);
