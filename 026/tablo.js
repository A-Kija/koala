const tablo = [];


for (let i = 0; i < 15; i++) {
    tablo.push('-');
}

let text = '*Labas*';
let letter = 0;
const div = document.querySelector('div.tablo');

setInterval(() => {
    tablo.push(text[letter]);
    tablo.shift();
    letter = letter + 1 == text.length ? 0 : letter + 1;
    let html = '';
    tablo.forEach(element => {
        html += `<div class="letter">${element}</div>`;
    });
    div.innerHTML = html;
}, 1000);














console.log(tablo);