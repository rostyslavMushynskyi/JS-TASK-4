"use strict";

// Task 1

const number = prompt("Введіть число");

const min = 55;
const max = 99;

if (number >= min && number <= max) {
  console.log("Число потрапляє в діапазон");
} else {
  console.log("Число не потрапляє в діапазон");
}

// Task 2

const person = 55;
const children = 16;
const adults = 60;
const retirees = 100;

if (person <= children) {
  alert("Діти");
} else if (person <= adults) {
  alert("Дорослі");
} else {
  alert("Пенсіонери");
}

// Task 3

const userName = prompt("Введіть своє ім'я");
const userLastName = prompt("Введіть своє прізвище");

if (userName.length > 4 && userLastName.length > 5) {
  const result = userName.length + userLastName.length;
  alert(result);
} else {
  alert("УПС");
}

// Task 4

const randomNumber = Math.round(Math.random() * (5 - 1)) + 1;

if (randomNumber === 1) {
  console.log("Number 1");
} else if (randomNumber === 2) {
  console.log("Number 2");
} else if (randomNumber === 3) {
  console.log("Number 3");
} else if (randomNumber === 4) {
  console.log("Number 4");
} else {
  console.log("Number 5");
}

// Task 5

const lang = prompt("Write your language");

switch (lang) {
  case "ua":
    console.log("Січень");
    break;
  case "en":
    console.log("January");
    break;
  case "fr":
    console.log("Janvier");
    break;
  case "ru":
    console.log("There is no such language");
    break;
  default:
    prompt("Choose one of the languages: ua,en,ru,fr. ");
    break;
}
