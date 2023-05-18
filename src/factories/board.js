/* eslint-disable no-restricted-syntax */
import Ship from "./ship";

export default class Board {
    constructor(x, y) {
        this.area = x * y;
    };

    // Board rows
    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

    // Board columns
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    filled = [];

    guessed = [];

    ships = [];

    buildGrid() {
        const squares = [];
        let i;
        let j;

        for (i = 0; i < this.letters.length; i++) {
            for (j = 0; j < this.numbers.length; j++) {
                const square = this.letters[i] + this.numbers[j];
                squares.push(square);
            };
        };

        this.squares = squares;
    };

    placeShip(square, length, dir) {
        // If data exists, split square into letter and number components
        if (square && length && length > 0) {
            const shipTest = [];
            const letter = square.substring(0, 1);
            const num = square.substring(1);

            // Vertical ship placements
            if (dir === 'ver') {
                if (this.squares.includes(square) && !this.filled.includes(square)) {
                    shipTest.push(square);
                    let i;
                    for (i = 1; i < length; i++) {
                        const letIndex = this.letters.indexOf(letter);
                        const ext = `${this.letters[letIndex - i]}${num}`;
                        if (this.squares.includes(ext) && !this.filled.includes(ext)) {
                            shipTest.push(ext);
                        };
                    }
                };
            };

            // Horizontal ship placements (default)
            if (dir === 'hor') {
                if (this.squares.includes(square) && !this.filled.includes(square)) {
                    shipTest.push(square);
                    let i;
                    for (i = 1; i < length; i++) {
                        const numIndex = this.numbers.indexOf(+num);         
                        const ext = `${letter}${this.numbers[numIndex + i]}`;
                        if (this.squares.includes(ext) && !this.filled.includes(ext)) {
                            shipTest.push(ext);
                        }
                    };
                };
            };

            // If entire ship fits on the board, create new ship and add it to filled
            if (shipTest.length === length) {
                shipTest.forEach((a) => this.filled.push(a));
                const placed = new Ship(length);
                placed.coordinates = shipTest;
                this.ships.push(placed);
                return placed;
            };
        };

        // Error condition
        return null;
    };

    receiveAttack(square) {
        // Square exists and has not been guessed
        if (square && this.squares.includes(square) && !this.guessed.includes(square)) {
            this.guessed.push(square);

            // Square is a hit
            if (this.filled.includes(square)) {
                this.ships.forEach((ship) => {
                    if (ship.coordinates.includes(square)) {
                        ship.hits += 1;
                        ship.sunk = ship.isSunk();
                    };
                });
            };
        };
    };

    allSunk() {
        if (this.ships && this.ships.length > 0) {
            for (const ship of this.ships) {
                if (ship.sunk === false) return false;
            };
            return true;
        }
        return false;
    };
}