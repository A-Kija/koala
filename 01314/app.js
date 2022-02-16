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


// const abcdz = () => 'abcdz' [rand(0, 4)];

const abcdz = () => {
    const word = 'abcdz';
    const random = rand(0, 4);
    return word[random];
}

const az = () => {
    const word = 'qwertyuiopasdfghjklzxcvbnm';
    const random = rand(0, word.length - 1);
    return word[random];
}

console.log(abcdz());



const line = l => {
    let returnStr = '';
    for (let i = 0; i < l; i++) {
        returnStr = returnStr + az();
    }
    return returnStr;
}




console.log(line(4));