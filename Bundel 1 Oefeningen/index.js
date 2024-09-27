// --- Bundel Oefeningen, Middelmatig ---
/* Oef 1
let i = 2;

for (i;i<=1000;i=i**2){
    console.log(i);
}
*/

/* Oef 2
let invoerGetal = parseInt(prompt("Voer hier een getal in voor aftelling:"));
let som = 0;

for (invoerGetal;invoerGetal>=0;invoerGetal--){
    console.log(invoerGetal);
}
*/

/* Oef 3
let n = parseInt(prompt("Voer hier een maximum getal in:"));
let i = 1;

for (i;i<=n;i++){
    console.log(i);
}
*/

/* Oef 4
let n = parseInt(prompt("Voer hier een maximum getal voor optelling in:"));
let i = 1;
let som = 0;

for (i;i<=n;i++){
    som = som + i;
    console.log(i);
}
console.log(`De totale som is ${som}`);
*/

/*Oef 5
let veelVoud = parseInt(prompt("Voer hier een getal in voor de veelvoud optelling:"));
let i = veelVoud;

for(i;i <= 100;i = i + veelVoud){
    console.log(i);
}
*/

/* Oef 6

let i = 1;
let som = 0;

for (i;i<=100;i++){
    if (i%2 == 0){
        som = som + i;
        console.log(i);
    }
}
console.log(som);
*/

/* Oef 7

let i = 1;
let som = 0;

for(i;i<=100;i++){
    if (i%2 > 0){
        som = som + i;
        console.log(i);
    }
}
console.log(som);
*/

/* Oef 8
let i = 1;

for(i;i<=10;i++){
    let somKwadraat = i ** 2;
    console.log(somKwadraat);
}
*/

/* Oef 9
let invoerGetal = parseInt(prompt("Geef hier een getal:"));
let i = 1;

for (i;i<=invoerGetal;i++){
    if (i%5 == 0){
        console.log(i);
    }
}
*/

/* Oef 10
let invoerGetal = parseInt(prompt("Voer hier een getal voor omkering in:"));
let inversieGetal = 0;

for (let i = invoerGetal;i > 0;i = (i - (i % 10)) / 10) {
    let laatsteCijfer = i % 10;
    inversieGetal = inversieGetal * 10 + laatsteCijfer;
}
console.log(inversieGetal);
*/

// --- Bundel Oefeningen, Geavanceerd ---

/* Oef 1
let count = 0;
let i = 2;
let j = 1;

for (i;i<=100;i++) {
    j = 1;
    count = 0;
    for (j;j<=i;j++) {
        if (i % j == 0) {
            count++;
        }
        if (j == i && count == 2) {
            console.log(i);
        }
        if (count > 2) {
            break;
        }
    }
}
*/

/* Oef 2
let invoerGetal = parseInt(prompt("Voer hier een maximumgetal in voor de faculteit:"));
let i = 0;
let som = 1;

for (i;i<invoerGetal;i++){
    som = som * (i+1);
    console.log(som);
}
console.log(`De faculteit van het getal ${invoerGetal} is ${som}`);
*/

/* Oef 3
let invoerGetal = parseInt(prompt("Vul hier een limietgetal in:"));
let i = 1;
let som = 0;

for (i;i<invoerGetal;i = i*2){
    console.log(i);
}
*/

/* Oef 4
let invoerGetal = prompt("Vul hier een getal in:");
let i = 0;
let som = 0;

for (i;i<invoerGetal.length;i++){
    som++;
}
console.log(`In het getal ${invoerGetal} zitten ${som} cijfers.`);
*/

/* Oef 5
let invoerGetal = prompt("Vul hier een getal in:");
let i = 0;
let som = 0;
let som2 = 0;

for (i;i<invoerGetal.length;i++){
    som++;
    som2 = som2 + som;
}
console.log(`In het getal ${invoerGetal} zitten ${som} cijfers, en de optelsom daarvan is ${som2}.`);
*/

/* Oef 6
let invoerGetal = parseInt(prompt("Vul hier een getal in:"));
let i = 0;
let som = 0;

for (i;i < invoerGetal;i++){
    if (invoerGetal%i == 0){
        continue;
    }
}
console.log(`De grootste deler van het getal ${invoerGetal} is ${i/2}, afgezien van het getal zelf.`);
*/

/* Oef 7
let count = 0;
let a = 0;
let b = 1;
let som = 0;
let output = "";

for (count;count<10;count++){
    som = a + b;
    if (count >= 1) {
        a = b;
        b = som;
    }
    if (count < 9) {
        output = output + `${som}, `;
    }else{
        output = output + `${som}`;
    }
}
console.log(output);
*/

/* Oef 8
let fibo = parseInt(prompt("Voer hier het aantal getallen in voor de Fibonacci Reeks:"));
let count = 0;
let a = 0;
let b = 1;
let c = 0;
let output = "";
let som = 0;

for (count;count<fibo;count++){
    c = a + b;
    if (count >= 1) {
        a = b;
        b = c;
    }
    if (count < (fibo - 1)) {
        output = output + `${c}, `;
    }else{
        output = output + `${c}`;
    }
    som = som + c;
}
console.log(output);
console.log(`De totale som van de eerste ${fibo} Fibonacci getallen is ${som}.`);
*/

// Oef 9
let invoerGetal = parseInt(prompt("Voer hier een getal in:"));
let count = 0;
let i = 2;
let j = 1;
let result = "";

for (i;i<=invoerGetal;i++) {
    j = 1;
    count = 0;
    for (j;j<=i;j++) {
        if (i % j == 0) {
            count++;
        }
        if (j == i && count == 2) {
            result = result + `${i}, `;
        }
        if (count > 2) {
            break;
        }
    }
}
console.log(result);
if (i == invoerGetal && count == 2) {
    console.log(`Het getal ${invoerGetal} is een priemgetal.`);
}
