'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 1; i < 6; i++) {
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    console.log(i + 1);
}

let abcdef = 'ABCDEFHHH';
for (let i = 0; i < abcdef.length; i++) {
    console.log(abcdef[i]);
}

console.log('------------------------------');

for (let i = 1; i < 6; i++) {
    console.log(i * 10);
}

console.log('------------------------------');

for (let i = 10; i <= 50; i = i + 10) {
    console.log(i);
}

console.log('------------------------------');

for (let i = 1; i <= 50; i++) {
    if (i % 10 == 0) {
        console.log(i);
    }

}