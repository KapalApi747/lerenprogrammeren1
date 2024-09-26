/* --- Oefening 13 ---

let som = 0;
let i = 1;
let totaalGetallen = parseInt(prompt("Hoeveel getallen wilt U geven?"));

for (i;i<=totaalGetallen;i++){
    let waardeGetallen = parseInt(prompt(`Voer hier getal ${i} in.`));
    som = som + waardeGetallen;
}
window.alert(`De totale som van de ${totaalGetallen} getallen is ${som}.`);
*/

/* --- Oefening 14 ---

let totaalSterren = parseInt(prompt("Voer hier het aantal sterren in dat U wilt zien."))
let ster = "*";
let i = 1;

for (i;i<=totaalSterren;i++){
    console.log(ster);
    ster = ster + "*";
}
*/

/* --- Oefening 15 ---
let i = 0;
let output = "";

for (i;i<=99;i++){
    if(i<=9) {
        output = output + `0${i},`;
    }else if(i == 99){
        output = output + `${i}`;
    }else {
        output = output + `${i},`;
    }
}
console.log(output)
*/

/* --- Oefening 16 ---
let i = 1;
let invoerGetal = parseInt(prompt("Voer hier het getal in voor de reeks."));
let output = "";

for(i;i<=invoerGetal;i=i*2){
    if(i * 2 < invoerGetal){
        output = output + `${i}, `;
    }
    else{
        output = output + `${i}`;
    }
}
console.log(output);
*/

/* --- Oefening 17 ---
let invoerGetal = parseInt(prompt("Hoeveel getallen wilt U invoeren?"));
let i = 1;
let som = 0;

for(i;i<=invoerGetal;i++) {
    let waardeGetallen = parseInt(prompt(`Voer hier getal ${i} in:`));
    if (waardeGetallen >= 0) {
        som = som + waardeGetallen;
    }else if(waardeGetallen < 0) {
        break;
    }
}
console.log(`De som van de getallen is ${som}.`)
*/

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

/* Oef 5
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


