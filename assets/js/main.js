/* ESERCIZIO 2*/

// Chiediamo all'utente l'età di due persone diverse
var eta_1 = prompt("Quanti hanni ha Player 1?");

var eta_2 = prompt("Quanti anni ha Player 2");

var message = document.getElementById("message");
// Mostriamo chi è il giocaotre più grande

if (eta_1 > eta_2) {
    message.innerHTML = "Player 1 è più grande di Player 2!"
    
} else if (eta_2 > eta_1) {
    message.innerHTML = "Player 2 è più grande di Player 1!"
    
} else {
    message.innerHTML = "I giocatori hanno la stessa età!"
}


/* ESERCIZIO 2*/

// quanto manca: utilizzando le funzioni dell'oggetto Date, stabilire l'ora attuale

var oraAttuale = new Date();

oraAttuale.getTime

console.log(oraAttuale);

var minutiAtt = oraAttuale.getMinutes();

console.log(minutiAtt);

// e attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.

var minutiOra = 60;

var quantoManca = minutiOra - minutiAtt;

document.getElementById("risultato").innerHTML = "Mancano " + quantoManca + " alla prossima ora!";

console.log(quantoManca);
 

/* ESERCIZIO 3*/

// pari o dispari: chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9.

var userChose = prompt("Scegli pari o dispari?").toLowerCase();


console.log(userChose);

if (userChose != "pari" && userChose != "dispari") {

    alert("La scelta non è giusta. Devi scegliere o pari o dispari");
    
}

var choseNumber = parseInt(prompt("Sclegi un numero da 1 a 9"));

if (choseNumber < 1 || choseNumber > 9 || isNaN(choseNumber)) {
    alert("Devi scegliere un numero compreso tra 1 e 9!")
    console.log(choseNumber);
}  

// Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. 

var randomPc = Math.ceil(Math.random()*9);

console.log(randomPc);


// Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.

var somma = choseNumber + randomPc;

console.log(somma);

var risultato;

if (somma % 2 == 0) {

    risultato = "pari";
    
} else {
    risultato = "dispari";
}


if (userChose == risultato) {

    console.log(risultato);

    console.log("Ha vinto l'utente");
    
} else {
    console.log(risultato);

    console.log("Ha vinto il Pc");
}
    