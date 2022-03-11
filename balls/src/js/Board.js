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
            const ballId = a25.shift();
            const number = document.createTextNode(ballId);
            ball.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
            ball.appendChild(number);
            ball.addEventListener('click', e => {
                Game.ballClick(ballId, e.target);
            });
            bin.appendChild(ball);
        })

    }

}