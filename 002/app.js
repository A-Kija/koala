// RECAP

let pirmas;
let antras;

let suma;
let dideleSuma;

pirmas = 10;
antras = 20;

pirmas = 25;

suma = pirmas + antras;

dideleSuma = pirmas + antras + 100;

console.log(suma, dideleSuma);


let raideA = 'A';
let raideB = 'B';
let trecias = 'ZZ';


console.log(typeof pirmas);
console.log(typeof trecias);


let operacija;

operacija = raideA + raideB + '--- --- ---' + 'SUPER';

console.log(operacija);

let cat1 = '=';
let cat2 = '_';
let cat3 = '^';

let cat;

cat = cat1 + cat3 + cat2 + cat3 + cat1;

console.log(cat, cat1 + cat3 + cat2 + cat3 + cat1);

let kintamasis1 = '5';
let kintamasis2 = 5;

console.log(kintamasis1 * kintamasis2);

let namas = 'ABC';

console.log(namas[1], namas[2]);

let catParts = '^_=';

let newCat = catParts[2] + catParts[0] + catParts[1] + catParts[0] + catParts[2];

console.log(newCat);

let T = true;
let F = false;

console.log('T || T', T || T);
console.log('T || F', T || F);
console.log('F || T', F || T);
console.log('F || F', F || F);

console.log('T && T', T && T);
console.log('T && F', T && F);
console.log('F && T', F && T);
console.log('F && F', F && F);

console.log('!T', !T);
console.log('!F', !F);


console.log('asilas', !!'asilas');
console.log('', !!''); // vienintelis stringas virstanti i false
console.log(' ', !!' ');
console.log('stringas 0', !!'0');

console.log(0, !!0); // vienintelis skaicius virstantis i false
console.log(21321, !!21321);

let kodas;
// 
// 
if (25 * 25) {
    // block1
    kodas = 'per BLOCK 1';
} else {
    // block2
    kodas = 'per BLOCK 2';
}

console.log(kodas);