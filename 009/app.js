'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const namas = ['Petras', 'Birutė', 'Bebras'];

console.log(typeof namas);

console.log(namas[2]);
console.log(namas[0]);

namas[1] = 'Barsukas';

namas[3] = 'Ūdra';

namas[9] = 'Žirafa';

namas[6] = true;

namas[7] = [1, 2, 3];



for (let i = 0; i < namas.length; i++) {
    console.log(namas[i]);
}

const cats = ['Pilkis', 'Murka', 'Keris', 'Ūkas'];

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i][0]);
}

const digits = [5, 8, 9, 45, 13, 78, 9, 10];

let digitsSum = 0;

for (let i = 0; i < digits.length; i++) {
    digitsSum = digitsSum + digits[i];
}

console.log(digitsSum);

// Pristatymas ant virsaus
namas.push('Krokodilas');

// Pristatymas is apacios
namas.unshift('Zuikis');




console.log(namas);


const newArray = [];

for (let i = 0; i < 20; i++) {
    let randomas = rand(1, 6);
    newArray.push(randomas);
}

console.log(newArray);

const arrayAB = [];

for (let i = 0; i < 33; i++) {
    const ab = rand(0, 1) ? 'A' : 'B';
    arrayAB.push(ab);
}

// console.table(arrayAB);


for (let i = 1; i < arrayAB.length; i++) {

    if (arrayAB[i] == 'A' && arrayAB[i - 1] == 'B') {
        arrayAB[i] = 'C';
    }

}

// console.table(arrayAB);

const arrayA = [];
const arrayB = [];
const arrayC = [];

for (let i = 1; i < arrayAB.length; i++) {

    if (arrayAB[i] == 'A') {
        arrayA.push('A');
    } else if (arrayAB[i] == 'B') {
        arrayB.push('B');
    } else {
        arrayC.push('C');
    }
}

console.log(arrayA, arrayB, arrayC);


const arrayABC = [];

for (let i = 0; i < 5; i++) {
    arrayABC.push('A');
}
console.table(arrayABC);
for (let i = 0; i < 5; i++) {
    arrayABC.unshift('B');
}
console.table(arrayABC);
for (let i = 0; i < 5; i++) {
    arrayABC.push('C');
}


for (let i = 0; i < 3; i++) {
    arrayABC.pop();
    arrayABC.shift();
}

console.table(arrayABC);