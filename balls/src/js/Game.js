import Board from "./Board";
export default class Game {

    static A;
    static B;
    static nextBall;

    static loadGame() {
        this.A = new Board('a');
        this.B = new Board('b');
    }

    static startGame() {
        this.A.fillWithNewBalls();
        this.nextBall = 1;
    }

    static endGame() {
        console.log('The END');
    }

    static goToNext() {
        this.nextBall++;
        console.log(this.nextBall);
        if (this.nextBall > 3) {
            this.endGame();
        }
    }

    static ballClick(number, ball) {
        if (this.nextBall == number) {
            this.moveBall(ball);
            this.goToNext();
        }
    }

    static moveBall(ball) {
        this.B.gameBoard[this.nextBall - 1].appendChild(ball);
    }

    static timer() {

    }

}