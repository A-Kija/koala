function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// RECAP

let skaicius = 5;
let stringas = 'Bla bla bla';
let loginis = true;

console.log(typeof skaicius, typeof stringas, typeof loginis);

console.log('aritmetika: ', skaicius * skaicius);
console.log('sujungimas: ', stringas + ' ' + stringas);
console.log('logika: ', loginis || loginis);

console.log('skirtingi 1: ', skaicius * loginis); // loginis -> number
console.log('skirtingi 2: ', stringas + loginis); // loginis -> string

if (0) {
    console.log('Jo');
} else {
    console.log('No');
}