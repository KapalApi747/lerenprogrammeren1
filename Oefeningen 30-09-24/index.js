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

/*
let invoerGetal = parseInt(prompt("Voer hier een getal in:"));
let i = 1;

while (i <= invoerGetal) {
    console.log(i);
    if (i == 1) {
        i = i * 4;
    }
    else {
        i = i ** 2;
    }
}
*/

/* Extra Oefening 1
let getal1 = parseInt(prompt(`Voer hier getal 1 in:`));
let getal2 = parseInt(prompt(`Voer hier getal 2 in:`));
let getal3 = parseInt(prompt("Voer hier getal 3 in:"));
let resultaat = "";

if (getal1 < getal2 && getal2 < getal3 && getal1 < getal3){
    resultaat = `${getal1}, ${getal2}, ${getal3}.`;
}
else if (getal2 < getal1 && getal1 < getal3 && getal2 < getal3){
    resultaat = `${getal2}, ${getal1}, ${getal3}.`;
}
else if (getal1 < getal3 && getal3 < getal2 && getal1 < getal3) {
    resultaat = `${getal1}, ${getal3}, ${getal2}.`;
}
else if (getal2 < getal3 && getal3 < getal1 && getal2 < getal1) {
    resultaat = `${getal2}, ${getal3}, ${getal1}.`;
}
else if (getal3 < getal2 && getal2 < getal1 && getal3 < getal1) {
    resultaat = `${getal3}, ${getal2}, ${getal1}.`;
}
else if (getal3 < getal1 && getal1 < getal2 && getal3 < getal2) {
    resultaat = `${getal3}, ${getal1}, ${getal2}.`;
}
console.log(`De getallen in volgorde van klein naar groot zijn: ${resultaat}`);
*/

// Extra Oefening 2
let somOneven = 0;
let somEven = 0;
let countOneven = 0;
let countEven = 0;

for (;;){
    let invoerGetal = parseInt(prompt("Voer hier getallen in, met 0 als beeindiging van de reeks:"));
    if (invoerGetal%2 > 0) {
        somOneven = somOneven + invoerGetal;
        countOneven++;
    }
    if (invoerGetal%2 == 0 && invoerGetal !== 0) {
        somEven = somEven + invoerGetal;
        countEven++;
    }
    if (invoerGetal == 0) {
        break;
    }
}
console.log(`Aantal oneven getallen: ${countOneven}, som oneven getallen: ${somOneven}.`)
console.log(`Aantal even getallen: ${countEven}, som even getallen: ${somEven}.`)