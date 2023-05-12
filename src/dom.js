import './style.css'; 
import Board from './factories/board';

export default function displayBoard() {
    const main = document.getElementById('main-wrapper');
    
    const board = new Board;

    board.buildGrid();

    board.placeShip('e4', 3);
    board.placeShip('j1', 5);
    board.placeShip('i10', 2, 'ver');
    board.placeShip('b7', 4);
    board.placeShip('h8', 3, 'ver');

    const gameBoard = document.createElement('div');
    gameBoard.classList.add('game-board');
    main.appendChild(gameBoard);

    const rowNames = document.createElement('div');
    rowNames.classList.add('row-names');
    gameBoard.appendChild(rowNames);

    board.letters.forEach((letter) => {
        const letterDiv = document.createElement('div');
        letterDiv.innerText = letter.toUpperCase();
        letterDiv.classList.add('label');
        rowNames.appendChild(letterDiv);
    });

    const colNames = document.createElement('div');
    colNames.classList.add('column-names');
    gameBoard.appendChild(colNames);

    board.numbers.forEach((number) => {
        const numDiv = document.createElement('div');
        numDiv.innerText = number;
        numDiv.classList.add('label');
        colNames.appendChild(numDiv);
    })

    const spacer = document.createElement('div');
    spacer.classList.add('spacer');
    gameBoard.appendChild(spacer);
    
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('game-grid');
    gameBoard.appendChild(gridDiv);

    let i;
    let j;
    for (i = board.letters.length - 1; i >= 0; i--) {
        for (j = 1; j < 11; j++) {
            const square = document.createElement('div');
            // square.innerText = `${board.letters[i]}${j}`;
            square.classList.add('board-square');
            square.setAttribute('data-coordinates', `${board.letters[i]}${j}`);
            // if (board.filled.includes(square.dataset.coordinates)) square.classList.add('ship-square');
            square.addEventListener('click', changeColor);
            gridDiv.appendChild(square);
        }
    };
    
    function changeColor(event) {
        const x = event.target;
        const guess = x.dataset.coordinates;        
        board.receiveAttack(guess);        
        if (board.filled.includes(guess)) {
            event.target.classList.add('hit-square');
        } else {
            event.target.classList.add('miss-square');
        };
    }
};


