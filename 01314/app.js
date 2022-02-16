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

const aPlus = () => {
    const word = 'ąčęėįšųūž';
    const random = rand(0, word.length - 1);
    return word[random];
}

const _123 = () => {
    const word = '0123456789';
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

const fancyLine = (l, f) => {
    let returnStr = '';
    for (let i = 0; i < l; i++) {
        returnStr = returnStr + f();
    }
    return returnStr;
}

console.log(fancyLine(10, () => {
    const word = '/*-+';
    const random = rand(0, word.length - 1);
    return word[random];
}));


// console.log(fancyLine(10, aPlus));
// console.log(fancyLine(10, abcdz));


const suma = (a, b) => a + b;
const skirtumas = (a, b) => a - b;
const daugyba = (a, b) => a * b;
const dalyba = (a, b) => a / b;

// const skaiciuoti = (a, b, v) => v(a, b);

const skaiciuoti = (a, b, v) => {
    let rezultatas;
    rezultatas = v(a, b);
    return rezultatas;
}

console.log(skaiciuoti(18, 5, (a, b) => a % b));

// const print = () => {
//     console.log(aPlus());
// }



// setInterval(() => {
//     console.log('!@#$%^&*' [rand(0, 7)]);
// }, 1000);

// setInterval(() => {
//     console.log('12345678' [rand(0, 7)]);
// }, 1000);


const girls = ['Lina', 'Birutė', 'Justė', 'Brigita', 'Deimantė'];


// for (let i = 0; i < girls.length; i++) {
//     console.log(girls[i]);
// }

const printGirl = (girl) => {
    console.log(girl)
}


// girls.forEach(i => console.log(i));
// girls.forEach(printGirl);

const m10 = [];
for (let i = 0; i < 10; i++) {
    m10.push(rand(0, 11));
}



let m10Sum = 0;

m10.forEach(s => {
    m10Sum = m10Sum + s;
});


let m10Min = 11;
let m10MinPlace = 0;

m10.forEach((s, i) => {
    if (s < m10Min) {
        m10Min = s;
        m10MinPlace = i;
    }
});


let m10Place5 = [];

console.table(m10);
m10.forEach((s, i) => {
    if (s == 5) {
        m10Place5.push(i);
    }
});


// girls.sort((a, b) => {
//     if (a > b) {
//         return -1;
//     }
//     if (a < b) {
//         return 1;
//     }
//     return 0;
// });

// const g = girls.map(g => [g, rand(45, 95), !rand(0, 1)]);


const g = [];

for (let i = 0; i < girls.length; i++) {
    const oneGirl = [];
    oneGirl.push(girls[i]);
    oneGirl.push(rand(45, 95));
    oneGirl.push(rand(0, 1) ? 'soka' : 'nemoka');
    g.push(oneGirl);
}

console.table(g);



// g.sort((a, b) => b[1] - a[1]);

g.sort((a, b) => {
    if (a[0] > b[0]) {
        return 1;
    }
    if (a[0] < b[0]) {
        return -1;
    }
    return 0;
});



console.table(g);




// console.log(m10Sum);
// console.log(m10Min, m10MinPlace);
// console.log(m10Place5);