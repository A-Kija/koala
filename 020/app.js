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