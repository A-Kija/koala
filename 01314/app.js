'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const mas = c => {
    const m = [];
    for (let i = 0; i < c; i++) {
        m.push(rand(0, 7))
    }
    return m;
}

console.log(mas(22));