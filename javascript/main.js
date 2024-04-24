"use strict";

/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.

1 - Definisco la variabile di 0,21 euro/km -ok
2 - Definisco una variabile e con prompt chiedo all'utente quanti chilometri vuole fare -ok
3 - Definisco una variabile e chiedo all'utente l'età -ok

N.B. il prompt restituisce una stringa --> conversione input in numeri

4 - Definisco una variabile con prezzo totale (0,21 \* km) 
5 - Definisco variabile dello sconto del 20%
6 - Definisco variabile dello sconto del 40%
7 - IF età < 18
sconto 20%
ELSE IF età > 65
sconto 40%
ELSE
prezzo pieno
8 - Output con 2 decimali.   */

let currentPriceId = document.getElementById("price");
let currentPrice = currentPriceId.innerHTML;

const ticketPriceKm = 0.21;

const userKm = Number(prompt("Quanti chilometri vuoi fare?"));
console.log("Chilometri da percorrere:", userKm);

if (isNaN(userKm)) {
  alert("ATTENZIONE! Quello inserito non è un numero");
  console.log("ATTENZIONE! Quello inserito non è un numero");
}

const userAge = Number(prompt("Quanti anni hai?"));
console.log("Eta' del viaggiatore:", userAge);

if (isNaN(userAge)) {
  console.log("ATTENZIONE! Quello inserito non è un numero");
}

let totalPriceTicket = userKm * ticketPriceKm;
console.log("Prezzo totale:", totalPriceTicket, "euro");

let discount = {};

if (userAge < 18) {
  discount = 20;
} else if (userAge > 65) {
  discount = 40;
} else {
  discount = 0;
}

let discountPercentage = (100 / 100) * discount;
console.log("Percentuale di sconto:", discountPercentage, "per cento");

let finalPrice =
  totalPriceTicket - (totalPriceTicket / 100) * discountPercentage;
console.log("Il prezzo finale è di:", finalPrice.toFixed(2), "euro");

currentPriceId.innerHTML = finalPrice;
