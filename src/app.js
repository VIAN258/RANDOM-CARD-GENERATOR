/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const numero = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const simbolos = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
const colores = ["black", "red", "black"];

function numeroAleatorio() {
  let aleatorio = Math.floor(Math.random() * 12);
  return numero[aleatorio];
}

function simbolosAleatorio() {
  let aleatorio = Math.floor(Math.random() * 3);
  return simbolos[aleatorio];
}

function intercambiar1() {
  let simbolo = simbolosAleatorio();
  document.getElementById("alto").innerHTML = simbolo;
}

function intercambiar2() {
  let simbolo = simbolosAleatorio();
  document.getElementById("bajo").innerHTML = simbolo;
}

function intercambiar3() {
  let numero = numeroAleatorio();
  document.getElementById("medio").innerHTML = numero;
}

function colorAleatorio() {
  let aleatorio = Math.floor(Math.random() * colores.lenght);
  body.style.color = colores[aleatorio];
}

setInterval(intercambiar1(), 1000);
setInterval(intercambiar2(), 1000);
setInterval(intercambiar3(), 1000);
