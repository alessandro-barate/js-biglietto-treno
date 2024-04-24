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

const ticketPriceKm = 0.21;
//console.log(ticketPriceKm);

const userKm = prompt("Quanti chilometri vuoi fare?");
console.log(userKm);
const userAge = prompt("Quanti anni hai?");
console.log(userAge);
