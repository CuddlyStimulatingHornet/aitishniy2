// Первая строчка кода

console.log("Hello world!");

// Способы объявления переменных

let basic = 1;
const unchanged = 2;
var old = 3;

// Типы данных

let str = "Привет"; // Строка
let num = 42; // Число
let isReady = true; // Логический тип
let empty = null; // Null
let notDefined; // Undefined
let person = { name: "Иван", age: 26 }; // Объект

// Разные типы объявления функций

function sayHello() {
  // Function Declaration
  console.log("Hello in function");
}

const sayBye = function () {
  // Function Expression
  console.log("Bye in function");
};

const sayGrra = () => {
  // Arrow Function
  console.log("Grra in function");
};

let userName = "   user   ";
let fixUser = userName.toUpperCase().trim(); // Использование методов примитивов
console.log("Hello " + fixUser);

sayHello();
sayBye();

// Код который добавляет кнпоке возможность менять цвет фона страницы

let button = document.getElementById("unique-button");

const changeColor = () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
  console.log(randomColor);
};

button.addEventListener("click", changeColor);

let val = "str";
let tasks = ["купить сахар", "скачать фильм", "покормить кота"];
console.log(tasks[tasks.length - 1]);
tasks.push("купить батарейки");
console.log(tasks);
let poppedEl = tasks.pop();
console.log(poppedEl);
console.log(tasks);
tasks.unshift("полить цветок");
console.log(tasks);
tasks.shift();
console.log(tasks);
let arrOfArr = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(tasks);

// for (let i = 0; i < tasks.length; i++) {
//   console.log(tasks[i]);
// }

for (const task of tasks) {
  console.log(task);
}

const newArr = tasks.map((task, index) => {
  // return index + 1 + ". Не забыть " + task; конкатенация
  return `${index + 1}. Не забыть ${task}`; // интерполяция
});
console.log(newArr);
console.log(tasks);

const shortTasks = tasks.filter((task) => {
  return task.length <= 13;
});

console.log(shortTasks);

let word = "word";
console.log(word.length);
