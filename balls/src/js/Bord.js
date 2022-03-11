import { gameBord, array25 } from "./functions";


export default class Bord {
    constructor(id) {
        this.gameBord = gameBord(id);
    }


    fillWithNewBalls() {
        const a25 = array25();
        this.gameBord.forEach(bin => {
            const ball = document.createElement('div');
            const number = document.createTextNode(a25.shift());
            ball.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
            ball.appendChild(number);
            bin.appendChild(ball);
        })

    }

}