/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const numero = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const simbolos = ["&spades;", "&clubs;", "&hearts;", "&diams;"];

function simbolosAleatorio() {
  let aleatorio = Math.floor(Math.random() * 4);
  if (aleatorio == 0 || aleatorio == 1) {
    color = "black";
  } else {
    color = "red";
  }
  return simbolos[aleatorio];
}

let color;

let simbolo = simbolosAleatorio();

function numeroAleatorio() {
  let aleatorio = Math.floor(Math.random() * 12);
  return numero[aleatorio];
}

function intercambiar1() {
  document.getElementById("alto").innerHTML = simbolo;
  document.getElementById("bajo").innerHTML = simbolo;
}

function intercambiar2() {
  let numero = numeroAleatorio();
  document.getElementById("medio").innerHTML = numero;
}

function colorAleatorio() {
  bajo.style.color = color;
  medio.style.color = color;
  alto.style.color = color;
}

setInterval(intercambiar1(), 1000);
setInterval(intercambiar2(), 1000);
setInterval(colorAleatorio(), 1000);
