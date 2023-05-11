import Board from "./board";

export default class Player {
    constructor(playerName) {
        this.name = playerName;
        this.board = new Board();
    };

    // Keep track of this player's guesses
    myGuesses = [];

    // Generate a random square that has not already been guessed (for computer turn)
    generateAttack() {
        let guess = '';
        const letIndex = Math.floor(Math.random() * 10);
        const letter = this.board.letters[letIndex];
        const num = Math.floor(Math.random() * 9 + 1);
        guess = `${letter}${num}`;
        if (!this.myGuesses.includes(guess)) {
            this.myGuesses.push(guess);
            return guess;
        }
        this.generateAttack();        
    };
}