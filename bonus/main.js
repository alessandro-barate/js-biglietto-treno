"use strict";

// Leggo dall'HTML il valore dell'id voluto
let userEvenOddChoiceId = document.getElementById("even-odd");

/* Definisco una variabile chiedendo all'utente di scegliere tra "pari" e "dispari" e stampo il risultato
    in console e sul monitor. */
let userEvenOdd = prompt('Scegli tra "pari" o "dispari"');
console.log(userEvenOdd);
userEvenOddChoiceId.innerHTML = userEvenOdd;

// Leggo dall'HTML il valore dell'id voluto
let userNumberChoiceId = document.getElementById("user-number");

/* Definisco una variabile chiedendo all'utente di scegliere un numero tra 1 e 9 e stampo il risultato
    in console e sul monitor. */
let userNumber = Number(prompt("Scegli un numero da tra 1 e 9"));
console.log(userNumber);
userNumberChoiceId.innerHTML = userNumber;

// Definisco una variabile contenente un numero randomico tra 1 e 9 e stampo il risultato in console.
const pcRandomNumber = Math.floor(Math.random() * 9) + 1;
console.log(pcRandomNumber);

// Definisco una variabile che è la somma totale dei due numeri e stampo il risultato in console.
const totalNumber = userNumber + pcRandomNumber;
console.log(totalNumber);

/* Definisco una variabile che è il risultato della divisione della somma dei due numeri (per vedere se il
    numero è pari o dispari: se il resto è 0 il numero è pari) e stampo il risultato in console. */
const evenOdd = totalNumber % 2;
console.log(evenOdd);

// Dichiaro le due variabili con i messaggi di vittoria o sconfitta
const winner = "Complimenti! Hai vinto un prosciutto";
const loser = "Mi spiace! Il prosciutto l'ha vinto il computer";

// Dichiaro una variabile che legge dall'HTML l'id voluto
let resultId = document.getElementById("result");

/* Istruzione condizionale
    Se la divisione dà 0 e l'utente ha scelto pari, vince.
    Se la divisione non dà 0 e l'utente ha scelto dispari, vince.
    Negli altri casi vince il computer.
    Stampo il risultato in console e sul monitor. */
if (evenOdd === 0 && userEvenOdd === "pari") {
  console.log(winner);
  resultId.innerHTML = winner;
} else if (evenOdd !== 0 && userEvenOdd === "dispari") {
  console.log(winner);
  resultId.innerHTML = winner;
} else {
  console.log(loser);
  resultId.innerHTML = loser;
}
