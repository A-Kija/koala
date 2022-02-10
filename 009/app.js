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

console.log(namas);

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