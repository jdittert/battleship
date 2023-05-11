import Ship from "./ship";

export default class Board {
    constructor(x, y) {
        this.area = x * y;
    };

    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

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
        if (square && length && length > 0) {
            const shipTest = [];
            const letter = square.substring(0, 1);
            const num = square.substring(1);
            if (dir === 'ver') {
                if (this.squares.includes(square) && !this.filled.includes(square)) {
                    shipTest.push(square);
                    let i;
                    for (i = 1; i < length; i++) {
                        const letIndex = this.letters.indexOf(letter);
                        const ext = `${this.letters[letIndex + i]}${num}`;
                        if (this.squares.includes(ext) && !this.filled.includes(ext)) {
                            shipTest.push(ext);
                        };
                    }
                };
            };
            if (dir !== 'ver') {
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
            if (shipTest.length === length) {
                shipTest.forEach((a) => this.filled.push(a));
                const placed = new Ship(length);
                placed.coordinates = shipTest;
                this.ships.push(placed);
                return placed;
            };
        }
        return null;
    }
}