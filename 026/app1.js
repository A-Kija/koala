const balls = [];

class ColorBall {

    constructor(color, n) {
        this.color = color;
        this.number = n;
        balls.push(this); // gaminamas masyvas dedant po vien1 elementa
    }
}

const number = document.querySelector('#number');
const color = document.querySelector('[type=color]');
const button = document.querySelectorAll('button'); // nodeList
const div = document.querySelector('div.balls');

button.forEach(b => {
    b.addEventListener('click', e => {
        if (e.target.id == 'add') {
            new ColorBall(color.value, number.value);
        } else {
            balls.shift();
        }
        let html = '';
        balls.forEach(element => {
            html += `<div class="ball" style="background:${element.color};">${element.number}</div>`;
        });
        div.innerHTML = html;
    });
});