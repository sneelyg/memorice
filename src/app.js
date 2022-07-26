/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  restartgame();
};
//declarandovariables importantees: Boton restart, y cada carta
var restartbtn = document.querySelector("#restartbtn");
restartbtn.addEventListener("click", restartgame);

var cartas = document.querySelectorAll(".col-3");

var letras = [
  "A",
  "A",
  "B",
  "B",
  "C",
  "C",
  "D",
  "D",
  "E",
  "E",
  "F",
  "F",
  "G",
  "G",
  "H",
  "H",
  "I",
  "I"
];

var contador = 0;
var restartgame = () => {
  let control_rand = [];
  for (let i = 0; i < 18; i++) {
    let randNum = generateRandom();
    while (control_rand.includes(randNum)) {
      randNum = generateRandom();
    }
    if (!control_rand.includes(randNum)) {
      control_rand.push(randNum);
      var H1 = document.createElement("h1");
      H1.append(letras[randNum]);
      H1.className = "text-info";

      cartas[i].appendChild(H1);
      cartas[i].nodeValue = i;
      H1.addEventListener("click", e => {
        if (contador == 0) {
          e.target.parentNode.className = " col-3 bg-danger rounded  m-1 p-1"; // Clase estándar celeste es "col-3 bg-info rounded  m-1 p-1"
          contador++;
          let aux0 = e.target.value;
          console.log(aux0);
          console.log(contador);
        }
        if (contador == 1) {
          e.target.parentNode.className = " col-3 bg-danger rounded  m-1 p-1"; // Clase estándar celeste es "col-3 bg-info rounded  m-1 p-1"
          contador++;
          let aux1 = e.target.value;
          console.log(aux1);
        }
      });

      //cartas[i].style.display = "none";
    }

    //cartas[i].innerHTML = "A"; // Esto es para probar si se van llenando de letras.
  }
};

var generateRandom = () => {
  return Math.floor(Math.random() * 18);
};
