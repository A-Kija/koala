const i1 = document.querySelector('.i1');
const b1 = document.querySelector('.b1');


// i1.addEventListener('input', () => {
//     console.log(i1.value);
// });


b1.addEventListener('click', () => {
    console.log(i1.value);
});


const i2 = document.querySelector('.i2');
const b2 = document.querySelector('.b2');
const a2 = [];

b2.addEventListener('click', () => {
    a2.push(i2.value);
    console.log(a2);
});


const i31 = document.querySelector('.i31');
const i32 = document.querySelector('.i32');
const b3 = document.querySelector('.b3');
const a3 = [];

b3.addEventListener('click', () => {
    a3.push([i31.value, i32.value]);
    console.log(a3);
});


const i4 = document.querySelector('.i4');
const b4 = document.querySelector('.b4');
const a4 = [];

b4.addEventListener('click', () => {
    a4.push(i4.value);
    console.log(a4);
});


const i5 = document.querySelectorAll('[name=n5]');
const b5 = document.querySelector('.b5');
const a5 = [];

b5.addEventListener('click', () => {
    i5.forEach(radio => {
        if (radio.checked) {
            a5.push(radio.value);
            console.log(a5);
        }
    });
});


const i6 = document.querySelectorAll('[name=n6]');
const b6 = document.querySelector('.b6');
const a6 = [];

b6.addEventListener('click', () => {
    const _3 = [];
    i6.forEach(radio => {
        if (radio.checked) {
            _3.push(radio.value);
        } else {
            _3.push('X');
        }
    });
    a6.push(_3);
    console.log(a6);
});


const i7 = document.querySelectorAll('.i7');
const b7 = document.querySelector('.b7');
const a7 = [];

b7.addEventListener('click', () => {
    const _3 = [];
    i7.forEach(check => {
        if (check.checked) {
            _3.push(check.value);
        }
    });
    a7.push(_3);
    console.log(a7);
});