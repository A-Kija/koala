function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// console.log('Labas');
// console.log('Labas dar kartą');
// console.log('Labas dar dar kartą');


let vaiko1Saldainiai;
let vaiko2Saldainiai;

let saldainiuSuma;


// vaiko1Saldainiai = 5; // pirmas vaikas turi 5 saldainius
// vaiko2Saldainiai = 6;

vaiko1Saldainiai = rand(1, 10);
vaiko2Saldainiai = rand(1, 10);


saldainiuSuma = vaiko1Saldainiai + vaiko2Saldainiai;


console.log('vaikas 1:', vaiko1Saldainiai);
console.log('vaikas 2:', vaiko2Saldainiai);
console.log('Bendrai:', saldainiuSuma);


console.log(8 % 3);

let skaicius;
skaicius = 5;

skaicius--;
skaicius--;
skaicius--;

console.log(skaicius);