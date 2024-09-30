/*
let nummer1 = 10;
let nummer2 = 5;
let operatie = "deling";
let resultaat;

switch(operatie){
    case "optellen":
        resultaat = nummer1 + nummer2;
        break;
    case "aftrekken":
        resultaat = nummer1 - nummer2;
        break;
    case "vermenigvuldiging":
        resultaat = nummer1 * nummer2;
        break;
    case "deling":
        if (nummer2 != 0){
            resultaat = nummer1 / nummer2;
        }else{
            resultaat = "niet deelbaar door 0";
        }
        break;
    default:
        resultaat = "ongeldige operatie";
}
console.log(resultaat);
*/

/*
let i = 1;

while (i <= 20){
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}
*/

/* Bundel Oefening 3 "Raden van een getal"

let invoerGetal = parseInt(prompt("Raad het getal, tussen 1 en 10! U krijgt 3 pogingen."));
let oplossing = 8;
let i = 1;
let aantalPogingen = 3;

while (i < aantalPogingen){
    if (invoerGetal > oplossing) {
        invoerGetal = parseInt(prompt("Helaas, het getal is kleiner. Probeer het nogmaals!"));
    }
    else if (invoerGetal < oplossing) {
        invoerGetal = parseInt(prompt("Helaas, het getal is groter. Probeer het nogmaals!"));
    }
    if (invoerGetal == oplossing) {
        window.alert(`Gefeliciteerd, het getal is ${oplossing}!`);
        break;
    }
    if (i == 2 && invoerGetal != oplossing) {
        window.alert("Het getal is jammer genoeg niet geraden.");
        break;
    }
    i++;
}
*/

let invoerGetal = parseInt(prompt("Voer hier een getal in:"));
let i = 4;

console.log(1);
while (i <= invoerGetal) {
    console.log(i);
    i = i*i;
}