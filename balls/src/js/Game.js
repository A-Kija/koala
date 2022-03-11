import Board from "./Board";
import { gamePanel, msgPanel } from "./functions";
export default class Game {

    static A;
    static B;
    static nextBall;
    static timerId;
    static gameStatus = 0;
    static msg;

    static loadGame() {
        this.A = new Board('a');
        this.B = new Board('b');
        this.panel = gamePanel();
        this.msg = msgPanel();
        this.panel.timer.innerText = 0;
        this.panel.start.addEventListener('click', () => {
            this.startGame();
        });
        this.panel.reset.addEventListener('click', () => {
            this.resetGame();
        });
    }

    static startGame() {
        if (this.gameStatus > 0) {
            return;
        }
        this.gameStatus = 1;
        this.A.fillWithNewBalls();
        this.nextBall = 1;
        this.startTimer();
        this.msg.innerText = 'Game started';
    }

    static endGame() {
        this.gameStatus = 2;
        this.stopTimer();
        this.msg.innerText = 'Game End';
    }

    static resetGame() {
        this.gameStatus = 0;
        this.panel.timer.innerText = 0;
        this.A.clearBalls();
        this.B.clearBalls();
        this.stopTimer();
        this.msg.innerText = '';
    }

    static goToNext() {
        this.nextBall++;
        if (this.nextBall > 25) {
            this.endGame();
        }
    }

    static ballClick(number, ball) {
        if (this.nextBall == number) {
            this.msg.innerText = 'Nice!';
            this.moveBall(ball);
            this.goToNext();
        } else {
            this.msg.innerText = 'Boooo!';
        }
    }

    static moveBall(ball) {
        this.B.gameBoard[this.nextBall - 1].appendChild(ball);
    }

    static startTimer() {
        let time = 0;
        this.timerId = setInterval(() => {
            this.panel.timer.innerText = ++time;
        }, 1000);
    }

    static stopTimer() {
        clearInterval(this.timerId);
    }

}