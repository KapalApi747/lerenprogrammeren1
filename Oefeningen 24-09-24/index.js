//Bepalen of een ingevoerd getal positief of negatief is.
/*
let getal= parseInt(prompt("Voer hier een getal in:"));

if(getal>0){
    console.log("Het ingevoerde getal is positief.");
}else if (getal<0){
    console.log("Het ingevoerde getal is negatief.");
}else{
    console.log("Het ingevoerde getal is precies nul.");
}
 */

/*
//Jaartal? Hou rekening met schrikkeljaar.
let jaarTal = parseInt(prompt("Voer hier een jaartal in."));

if(jaarTal%4 == 0 && jaarTal%100 !== 0 || jaarTal%400 == 0) {
    prompt("Dit jaartal is een schrikkeljaar.");
}else{
    prompt("Dit jaartal is geen schrikkeljaar.");
}
*/

/*
//Een getal is even of oneven?
let getal = parseInt(prompt("Voer hier een getal in."));

if(getal%2 == 0){
    window.alert(`Het getal ${getal} is even.`);
}else{
    window.alert(`Het getal ${getal} is oneven.`);
}
*/

/*
//Maak een programma dat 3 cijfers van een gebruiker accepteert en het grootste van de 3 weergeeft.

let getal1 = parseInt(prompt("Voer het eerste getal in."));
let getal2 = parseInt(prompt("Voer het tweede getal in."));
let getal3 = parseInt(prompt("Voer het derde getal in."));

if(getal1 > getal2 && getal1 > getal3){
    window.alert(`Het eerste ingevoerde getal, ${getal1}, is het grootste getal van de drie.`);
}else if(getal2 > getal1 && getal2 > getal3){
    window.alert(`Het tweede ingevoerde getal, ${getal2}, is het grootste getal van de drie.`);
}else if(getal3 > getal1 && getal3 > getal2){
    window.alert(`Het derde ingevoerde getal, ${getal3}, is het grootste getal van de drie.`);
}else if(getal1 == getal2 && getal2 == getal3){
    window.alert("Er zijn 3 gelijke getallen ingevoerd.")
}
*/

//Maak een programma dat een nummer invoert en controleert of het deelbaar is door 3 en 5, of door geen van beide.
/*
let getal = parseInt(prompt("Voer een getal in."));

if ((getal%3 == 0) && (getal%5 == 0)){
    window.alert(`Het getal ${getal} is deelbaar door 3 en 5.`);
}else if ((getal%3 >= 0) && (getal%5 >= 0)){
    window.alert(`Het getal ${getal} is niet deelbaar door 3 en 5.`);
}
*/

/*Schrijf een programma dat de BMI van een gebruiker berekent op basis van hun lengte (in meters)
en gewicht (in kilogram). Formule BMI = gewicht / (lengte * lengte). Het programma moet vervolgens bepalen
of de gebruiker ondergewicht, normaal gewicht, overgewicht of obesitas heeft op basis van de BMI-waarden:
-   Ondergewicht: BMI < 18.5
-   Normaal: 18.5 <= BMI < 25
-   Overgewicht: 25 <= BMI < 30
-   Obesitas: BMI >= 30
*/

/*
let gewicht = parseFloat(prompt("Voer hier uw gewicht in, in kg:"));
let lengte = parseFloat(prompt("Voer hier uw lengte in, in meters:"));
let BMI = Number(gewicht/(lengte*lengte));

if (BMI < 18.5){
    window.alert(`Uw BMI is ${BMI.toFixed(2)}, U heeft ondergewicht!`);
}else if (BMI >= 18.5 && BMI < 25) {
    window.alert(`Uw BMI is ${BMI.toFixed(2)}, U heeft normaal gewicht.`);
}else if (BMI >= 25 && BMI < 30){
    window.alert(`Uw BMI is ${BMI.toFixed(2)}, U heeft overgewicht!`);
}else{
    window.alert(`Uw BMI is ${BMI.toFixed(2)}, U heeft obesitas!`);
}
*/

/*
Schrijf een programma dat het totale bedrag berekent dat je moet betalen in een winkel op basis van
het aantal producten dat je koopt en de prijs per product. Als je meer dan 10 producten koopt, krijg je
10% korting, anders betaal je de volle prijs.
 */

/*
let productAantal = parseInt(prompt("Voer hier het aantal producten in:"));
let prijs = parseFloat(prompt("Voer hier de prijs in per product:"));

if (productAantal > 10) {
    window.alert(`U koopt ${productAantal} producten, U krijgt 10% korting! U betaalt €${((prijs*productAantal) * 0.9).toFixed(2)} i.p.v. €${(prijs*productAantal).toFixed(2)}.`);
}else{
    window.alert(`U koopt ${productAantal} producten, U krijgt helaas geen korting. U betaalt €${(prijs*productAantal).toFixed(2)}.`);
}
*/

let product = prompt("Voer hier het type product in:");
let productAantal = parseInt(prompt("Voer hier het aantal van het product in:"));
let prijs = parseFloat(prompt("Voer hier de prijs in € in voor het product:"));

if((prijs*productAantal) >= 100){
    window.alert(`Als U ${productAantal} van het product ${product} koopt voor de prijs van €${prijs}, krijgt U 10% korting en betaalt U in totaal €${((prijs*productAantal)*0.9).toFixed(2)}!`);
}else if((prijs*productAantal) >= 50 && (prijs*productAantal) < 100){
    window.alert(`Als U ${productAantal} van het product ${product} koopt voor de prijs van €${prijs}, krijgt U 5% korting en betaalt U in totaal €${((prijs*productAantal)*0.95).toFixed(2)}!`);
}else{
    window.alert(`Als U ${productAantal} van het product ${product} koopt voor de prijs van €${prijs}, krijgt U helaas geen korting en betaalt U in totaal €${(prijs*productAantal).toFixed(2)}.`);
}