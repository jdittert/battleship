import Ship from "./ship";

export default class Board {
    constructor(x, y) {
        this.area = x * y;
    };

    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    ships = [];

    guessed = [];

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

    placeShip(square, length) {
        if (square && length && length > 0) {
            const shipTest = [];
            if (this.squares.includes(square) && !this.ships.includes(square)) {
                shipTest.push(square);
                const split = square.split('');
                let i;
                for (i = 1; i < length; i++) {
                    const letter = split[0];
                    let num;
                    if (split.length === 2) {
                        num = this.numbers.indexOf(+split[1]);
                    } else num = this.numbers.indexOf(10);                
                    const ext = `${letter}${this.numbers[num + i]}`;
                    if (this.squares.includes(ext) && !this.ships.includes(ext)) {
                        shipTest.push(ext);
                    }
                };
            };
            if (shipTest.length === length) {
                shipTest.forEach((a) => this.ships.push(a));
                const placed = new Ship(length);
                placed.coordinates = shipTest;
                return placed;
            }
        }
        return null;
    }
}