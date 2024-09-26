// let, var, const
// let blockscope, var universeel (buiten blok), const is een vaste waarde

//DATATYPES
let getal = 5; //de output zal dus een NUMBER zijn
let tekst = "Tom" //STRING
let keuze = 1;// 1 = true, 0 = false //BOOLEAN!!

let strNum = "123";
strNum = parseInt(strNum); //kommagetallen = parseFloat


let strNum1 = "123";
strNum1 = parseInt(strNum1);

let resultaat = strNum+strNum1
console.log(typeof(resultaat));

let person = {
    name:"Jane",
    age:30,
    isStudent: false,
    haarkleur: "bruin"
}

console.log(typeof(person));
console.log(person.name);

var familieNaam = "Steijaert";
var geboorteJaar = 1993;
var huidigJaar = 2024;
var leeftijd = huidigJaar-geboorteJaar;

console.log(familieNaam);
console.log(leeftijd);

//het resultaat van Steijaert is 31 jaar.

//het resultaat van familieNaam is 31 jaar.

//het resultaat van familieNaam is leeftijd.

//ES5 Notatie
console.log("het resultaat van" , familieNaam , "is" , leeftijd);
//ES6 Notatie (backtick operator)
console.log(`het resultaat van ${familieNaam} is ${leeftijd}`)

let getal1 = parseInt(prompt("Voer je eerste getal in"));
let getal2 = parseInt(prompt("Voer je tweede getal in"));

console.log(`${getal1} + ${getal2} = ${getal1+getal2}`); //ES6
console.log(`${getal1} * ${getal2} = ${getal1*getal2}`); //ES6
console.log(`${getal1} / ${getal2} = ${getal1/getal2}`); //ES6
console.log(`${getal1} - ${getal2} = ${getal1-getal2}`); //ES6
console.log(`${getal1} % ${getal2} = ${getal1%getal2}`); //ES6
console.log(`${getal1} ** ${getal2} = ${getal1**getal2}`); //ES6//ES6

let getal5 = 5

//getal5 = getal5 + 1;
getal5-=1; //shorthandnotatie

console.log(getal5);

console.log(5=="5"); //true
console.log(5==="5"); //false


