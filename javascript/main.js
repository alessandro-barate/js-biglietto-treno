"use strict";

// Prendo dall'HTML l' ID desiderato
let currentPriceId = document.getElementById("price");
let currentPrice = currentPriceId.innerHTML;

// Definisco la costante di prezzo al km
const ticketPriceKm = 0.21;

// Definisco la costante dei km chiedendola all'utente, la trasformo in numero e la stampo in console
const userKm = Number(prompt("Quanti chilometri vuoi fare?"));
console.log("Chilometri da percorrere:", userKm);

/* Istruzione condizionale.
  Ad oggi non ho modo di risolvere il loop che si presenta (se continua ad esserci un input non valido),
  quindi semplicemente appare un alert ed il programma continua lo stesso, dando però nel caso un risultato
  non valido */
if (isNaN(userKm)) {
  alert("ATTENZIONE! Quello inserito non è un numero");
  console.log("ATTENZIONE! Quello inserito non è un numero");
}

// Definisco la costante dell'età chiedendola all'utente, la trasformo in numero e la stampo in console
const userAge = Number(prompt("Quanti anni hai?"));
console.log("Eta' del viaggiatore:", userAge);

/* Istruzione condizionale.
  Ad oggi non ho modo di risolvere il loop che si presenta (se continua ad esserci un input non valido),
  quindi semplicemente appare un alert ed il programma continua lo stesso, dando però nel caso un risultato
  non valido */
if (isNaN(userAge)) {
  console.log("ATTENZIONE! Quello inserito non è un numero");
}

// Definisco la variabile del prezzo totale del biglietto in base ai km e lo stampo in console
let totalPriceTicket = userKm * ticketPriceKm;
console.log("Prezzo totale:", totalPriceTicket, "euro");

// Dichiaro la variabile dello sconto applicabile
let discount = {};

//Dichiaro le variabili per le età sotto ai 18 anni e sopra i 65 anni
const ageUnder = 18;
const ageOver = 65;

/* Istruzione condizionale
  Se l'età inserita dall'utente è inferiore ai 18 anni lo sconto è di 20, se superiore ai 65 anni. Negli altri
  casi lo sconto è nullo */
if (userAge < ageUnder) {
  discount = 20;
} else if (userAge >= ageOver) {
  discount = 40;
} else {
  discount = 0;
}

// Definisco la percentuale di sconto e la stampo in console
let discountPercentage = (100 / 100) * discount;
console.log("Percentuale di sconto:", discountPercentage, "per cento");

/* Definisco il prezzo finale del biglietto (considerando lo sconto) e lo stampo in console con solo 2 cifre
  decimali */
let finalPrice =
  totalPriceTicket - (totalPriceTicket / 100) * discountPercentage;
console.log("Il prezzo finale è di:", finalPrice.toFixed(2), "euro");

// Mostro nell'HTML il prezzo del biglietto
currentPriceId.innerHTML = finalPrice;

// TODO: chiedere come mostrare nell'html solo 2 decimali.
