import { gameBoard, array25 } from "./functions";
import Game from "./Game";


export default class Board {
    constructor(id) {
        this.gameBoard = gameBoard(id);
    }


    fillWithNewBalls() {
        const a25 = array25();
        this.gameBoard.forEach(bin => {
            const ball = document.createElement('div');
            const number = document.createTextNode(a25.shift());
            ball.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
            ball.appendChild(number);
            ball.addEventListener('click', () => {
                Game.ballClick(number);
            });
            bin.appendChild(ball);
        })

    }

}