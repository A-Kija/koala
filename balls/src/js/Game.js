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

    static ballClick(number) {
        console.log('ball', number);
    }

}