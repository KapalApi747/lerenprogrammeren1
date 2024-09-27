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
let nummer = 0;
let i;
let j;

for (i=2;i<=100;i++) {
    for (j = 1; j <= i; j++) {
        if (i % j == 0) {
            nummer++;
            if (nummer == 3) {
                j = -1;
                nummer === 0;
            }else {
                console.log(i);
            }
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

// Oef 7
let count = 0;
let a = 0;
let b = 0;
let som = 0;

for (count;count<10;count++){
    som = a + b;
    console.log(som);
    a = b;
    b = som;
    if (count == 0){
        som = 0;
        b = b+1;
    }
}

