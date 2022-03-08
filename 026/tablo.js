const tablo = [];


for (let i = 0; i < 15; i++) {
    tablo.push(' ');
}

let text = 'KROKODILAS GENA ';
let letter = 0;
const div = document.querySelector('div.tablo');
let color = 'yellow';
let size = 60;

setInterval(() => {
    tablo.push(text[letter]);
    tablo.shift();
    letter = letter + 1 == text.length ? 0 : letter + 1;
    let html = '';

    tablo.forEach(element => {
        html += `<div class="letter" 
        style="
            color:${color};
            font-size:${size}px;
            min-width:${size}px;
        ">${element}</div>`;
    });
    div.innerHTML = html;
}, 100);

const inputText = document.querySelector('#text');
const buttonText = document.querySelector('#enter-text');

// buttonText.addEventListener('click', () => {
//     letter = 0;
//     text = inputText.value;
// });

inputText.addEventListener('input', () => {
    letter = 0;
    text = inputText.value;
});

const inputColor = document.querySelector('#color');
const inputSize = document.querySelector('#size');

inputColor.addEventListener('input', () => {
    color = inputColor.value;
});

inputSize.addEventListener('input', () => {
    size = inputSize.value;
});















console.log(tablo);