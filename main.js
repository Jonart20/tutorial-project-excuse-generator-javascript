/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let parrafo = document.getElementById("excuse");
const btn = document.getElementById("btn");
btn.addEventListener("click", generateExcuse);

function generateExcuse() {
  parrafo.innerHTML = excuse();
}
/*
function bucle() {
  var ms;
  var valor = prompt("Escriba un número");
  if (valor <= 5) {
    ms = "Menor";
    return ms;
  } else {
    ms = "Mayor";
    return ms;
  }
}
*/
function excuse() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  var excuse1 = Math.floor(Math.random(who.length - 1) * 4);
  var excuse2 = Math.floor(Math.random(action.length - 1) * 4);
  var excuse3 = Math.floor(Math.random(what.length - 1) * 3);
  var excuse4 = Math.floor(Math.random(when.length - 1) * 5);
  var result =
    who[excuse1] +
    " " +
    action[excuse2] +
    " " +
    what[excuse3] +
    " " +
    when[excuse4];
  return result;
}

function fizzBuzz() {
  // Your code here
  for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      var fizzbuzz = "FizzBuzz";
      console.log(fizzbuzz);
    } else if (i % 3 == 0) {
      var fizz = "Fizz";
      console.log(fizz);
    } else if (i % 5 == 0) {
      var buzz = "Buzz";
      console.log(buzz);
    } else {
      console.log(i);
    }
  }
}

let arregloMio = [1, 2, 3, 4, 5]; //2, 4, 6, 8, 10
function arreglo(arr) {
  let newArr = [];
  for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
    let valor = arr[i];
    newArr.push(valor * 2);
    console.log(newArr[i]);
  }
  return newArr;
}

window.onload = function() {
  //console.log("Hello Rigo from the console!");
  //this.console.log("Este es un mensaje");
  this.console.log(excuse());
  //console.log(fizzBuzz());
  console.log(arreglo(arregloMio));
};
