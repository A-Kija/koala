const balls = [];

class ColorBall {

    constructor(color, number) {
        this.color = color;
        this.number = number;
        balls.push(this);
    }
}

const number = document.querySelector('#number');
const color = document.querySelector('[type=color]');
const button = document.querySelectorAll('button');
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