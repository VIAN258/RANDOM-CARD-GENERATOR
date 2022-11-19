/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const numero = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const simbolos = ["&spades;", "&clubs;", "&hearts;", "&diams;"];

//document.getElementById("alto").innerHTML = "2";
//document.getElementById("medio").innerHTML = "3";
//document.getElementById("bajo").innerHTML = "7";

function numeroAleatorio() {
  let aleatorio = Math.floor(Math.random() * 12);
  return numero[aleatorio];
}

function simbolosAleatorio() {
  let aleatorio = Math.floor(Math.random() * 3);
  return simbolos[aleatorio];
}

function intercambiar() {}

setInterval(function() {
  console.log("angel");
}, 1000);

//console.log(numeroAleatorio());
//console.log(simbolosAleatorio());
