/*ITERATIES

for loop
 */

//for(initialisatie;conditie;update){
//
//}
/*
let eindGetal = parseInt(prompt("Geef een eindgetal in:"));
for(let i = 1;i<eindGetal;i++){
    console.log(`dit is nummer ${i}`);
}
*/
/*
for(let i = 1;i<=20;i++){
    if(i%2 == 0){
        console.log(i);
    }
}
*/

/* --- Oefening ---

console

1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
1 x 4 = 4
1 x 5 = 5
*/

/*
let tafel = parseInt(prompt("Wat is de tafel:"));
let eindGetal = parseInt(prompt("Geef het eindgetal:"));
let i = 1;

for(i;i<=eindGetal;i++){
    console.log(`${tafel} x ${i} = ${tafel*i}`);
}
*/
//Schrijf een programma dat het gemiddelde van de getallen van 1 tot en met 10 berekent.

let i = 1;
let som = 0;
let resultaat = 0;
let eindGetal = parseInt(prompt("Geef het eindgetal:"));

for(i;i<=eindGetal;i++){
    som = som + i;
    console.log(som, i);
}
resultaat = som / eindGetal;
console.log(resultaat);