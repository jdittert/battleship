import Board from "./board";

export default class Player {
    constructor(playerName) {
        this.name = playerName;
        this.board = new Board();
        this.board.buildGrid();
        this.computerShips();
    };

    // Keep track of this player's guesses
    myGuesses = [];

    // Generate a random square
    randomSquare() {
        let guess = '';
        const letIndex = Math.floor(Math.random() * 10);
        const letter = this.board.letters[letIndex];
        const num = Math.floor(Math.random() * 10 + 1);
        guess = `${letter}${num}`;
        return guess;
    }
    
    // Guess a square that has not already been guessed (for computer turn)
    generateAttack() {
        const guess = this.randomSquare();
        if (!this.myGuesses.includes(guess)) {
            this.myGuesses.push(guess);
            return guess;
        };
        return null; 
    };           
    

    // Generate a random ship and place it on the board
    randomShip(length) {
        const square = this.randomSquare();
        const rDir = Math.floor(Math.random() * 2);
        let dir;
        if (rDir === 0) dir = 'hor';
        if (rDir === 1) dir = 'ver'; 
        const tryShip = this.board.placeShip(square, length, dir);
        if (tryShip === null) this.randomShip(length);
    }

    // Generate random ships for computer
    computerShips() {
        if (this.name === 'Computer') {
            this.randomShip(5);
            this.randomShip(4);
            this.randomShip(3);
            this.randomShip(3);
            this.randomShip(2);
        } else {
            return; 
        };
    }
}