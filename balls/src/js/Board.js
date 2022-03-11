import { gameBoard, array25 } from "./functions";
import Game from "./Game";


export default class Board {
    constructor(id) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.id = id;
        this.gameBoard = [];
        for (let i = 0; i < 25; i++) {
            this.gameBoard[i] = document.createElement('div');
            this.gameBoard[i].classList.add('bin');
            square.appendChild(this.gameBoard[i]);
        }
        document.querySelector('body').appendChild(square);
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

    clearBalls() {
        this.gameBoard.forEach(bin => {
            bin.innerHTML = '';
        });
    }

}