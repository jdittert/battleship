import './style.css'; 
import Player from './factories/player';

export default function Dom() {

    const displayBoard = (Player) => {
        const main = document.getElementById('main-wrapper');

        const {board} = Player; 

        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player-div');
        playerDiv.setAttribute('id', `${Player.name}`);
        main.appendChild(playerDiv);

        const displayName = document.createElement('div');
        displayName.classList.add('player-name');
        displayName.setAttribute('id', `${Player.name}-name`);
        displayName.innerText = `${Player.name}`;
        playerDiv.appendChild(displayName);

        const gameBoard = document.createElement('div');
        gameBoard.classList.add('game-board');
        playerDiv.appendChild(gameBoard);

        const rowNames = document.createElement('div');
        rowNames.classList.add('row-names');
        gameBoard.appendChild(rowNames);

        Player.board.letters.forEach((letter) => {
            const letterDiv = document.createElement('div');
            letterDiv.innerText = letter.toUpperCase();
            letterDiv.classList.add('label');
            rowNames.appendChild(letterDiv);
        });

        const colNames = document.createElement('div');
        colNames.classList.add('column-names');
        gameBoard.appendChild(colNames);

        Player.board.numbers.forEach((number) => {
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
                square.classList.add('board-square');
                square.setAttribute('data-coordinates', `${board.letters[i]}${j}`);
                if (Player.name === 'Computer') square.addEventListener('click', humanAttack);
                gridDiv.appendChild(square);
            }
        };

        const lastGuess = document.createElement('div');
        lastGuess.classList.add('last-guess');    
        playerDiv.appendChild(lastGuess);

        const guessLabel = document.createElement('div');
        guessLabel.innerText = `${Player.name}'s last guess:`;
        lastGuess.appendChild(guessLabel);

        const guessSquare = document.createElement('div');
        guessSquare.setAttribute('data-player', `${Player.name}`);
        guessSquare.innerText = '';
        lastGuess.appendChild(guessSquare);
        
        function humanAttack(event) {
            const x = event.target;
            const guess = x.dataset.coordinates;        
            Player.board.receiveAttack(guess);
            changeColor(Player, guess);
            const guessDiv = document.getElementById('Human');
            const humanGuess = guessDiv.querySelector('[data-player="Human"]');
            humanGuess.innerText = `${guess}`;
            if (Player.board.allSunk() === true) {
                const squares = document.querySelectorAll('.board-square');
                squares.forEach((square) => square.removeEventListener('click', humanAttack))
            }
        };       
        
    }

    const changeColor = (Player, square) => {
        const activeBoard = document.getElementById(`${Player.name}`);
        const activeSquare = activeBoard.querySelector(`[data-coordinates='${square}']`);
        if (Player.board.filled.includes(square)) {
            activeSquare.classList.add('hit-square');
        } else {
            activeSquare.classList.add('miss-square');
        };
    };

    return { displayBoard, changeColor }
};

