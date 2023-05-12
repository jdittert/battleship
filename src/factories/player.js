import Board from "./board";

export default class Player {
    constructor(playerName) {
        this.name = playerName;
        this.board = new Board();
    };

    // Keep track of this player's guesses
    myGuesses = [];

    // Generate a random square
    randomSquare() {
        let guess = '';
        const letIndex = Math.floor(Math.random() * 10);
        const letter = this.board.letters[letIndex];
        const num = Math.floor(Math.random() * 9 + 1);
        guess = `${letter}${num}`;
        return guess;
    }
    
    // that has not already been guessed (for computer turn)
    generateAttack() {
        const guess = this.randomSquare();
        if (!this.myGuesses.includes(guess)) {
            this.myGuesses.push(guess);
            return guess;
        }
        this.generateAttack();        
    };

    // Generate a random ship and place it on the board
    randomShip(length) {
        const square = this.randomSquare();
        const rDir = Math.floor(Math.random() * 2);
        let dir;
        if (rDir === 0) dir = null;
        if (rDir === 1) dir = 'ver'; 
        const tryShip = this.board.placeShip(square, length, dir);
        console.log(tryShip);
        if (tryShip === null) this.randomShip(length);
    }
}