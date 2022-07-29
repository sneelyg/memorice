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

const letras = [
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
var carta0;
var carta1;
var aux0;
var aux1;
var contador_exitos = 0;
var restartgame = () => {
  let control_rand = [];
  for (let i = 0; i < 18; i++) {
    //acá recorremos todas las cartas y le asignamos uan letra.
    let randNum = generateRandom();
    while (control_rand.includes(randNum)) {
      //verifica que el número random no esté usado aún.
      randNum = generateRandom();
    }
    if (!control_rand.includes(randNum)) {
      control_rand.push(randNum); //registra el numero en el arreglo de control
      var H1 = document.createElement("h1"); //crea el h1 en que lelva la letra
      H1.append(letras[randNum]); //le asigna una letra desde el arreglo, con el numero random
      H1.className = "text-dark"; //le asigna color, esto debe cambiarse por un display none, pero por ahora si hago eso desaparece el div (se achica mucho)

      cartas[i].appendChild(H1); //a la carta (o div) se le agrega el
      cartas[i].nodeValue = i;
      cartas[i].setAttribute("for", i);
      H1.addEventListener("click", e => {
        if (contador == 0) {
          e.target.parentNode.className = " col-3 bg-danger rounded  m-1 p-1"; // Clase estándar celeste es "col-3 bg-info rounded  m-1 p-1"
          contador++;
          aux0 = e.target.innerHTML; //Lee la letra
          carta0 = parseInt(e.target.parentNode.getAttribute("for")); // lee el numero o index de la carta
          console.log(aux0);
          console.log("Numero de CArta  " + carta0);
          console.log(contador);
          console.log(e.target.parentNode);
        } else if (contador == 1) {
          e.target.parentNode.className = " col-3 bg-danger rounded  m-1 p-1"; // Clase estándar celeste es "col-3 bg-info rounded  m-1 p-1"
          contador++;
          aux1 = e.target.innerHTML; //registra la letra
          carta1 = parseInt(e.target.parentNode.getAttribute("for"));
          setTimeout(comparar, 1000, aux0, aux1, carta0, carta1);
          console.log(aux1);
          console.log("Numero de CArta  " + carta1);
          console.log(contador);
          console.log(e.target.parentNode);
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

function comparar(letra0, letra1, carta0, carta1) {
  if (letra0 == letra1) {
    console.log("son iguales!!");
    cartas[carta0].className = " col-3 bg-success rounded  m-1 p-1";
    cartas[carta1].className = " col-3 bg-success rounded  m-1 p-1";
    contador_exitos++;
  }
  if (letra0 != letra1) {
    console.log("son distintas!!");
    cartas[carta0].className = " col-3 bg-info rounded  m-1 p-1";
    cartas[carta1].className = " col-3 bg-info rounded  m-1 p-1";
  }
  if (contador_exitos == 9) {
    alert("Has Ganado!!Felicidades!!");
  }

  console.log(letra0 + letra1 + carta0 + carta1);
  contador = 0;
  return console.log("Comparando");
}
