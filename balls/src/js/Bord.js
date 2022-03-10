import { gameBord } from "./functions";

export default class Bord {
    constructor(id) {
        this.gameBord = gameBord(id);
    }
}