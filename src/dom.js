import './style.css'; 
import Board from './factories/board';

export default function test() {
    const main = document.getElementById('main-wrapper');
    
    const board = new Board;

    board.buildGrid();
    

    let i;
    let j;
    for (i = board.letters.length - 1; i >= 0; i--) {
        for (j = 1; j < 11; j++) {
            const square = document.createElement('div');
            square.innerText = `${board.letters[i]}${j}`;
            main.appendChild(square);
        }
    };
};
