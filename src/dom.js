import './style.css'; 
import Player from './factories/player';

export default function Dom() {

    const main = document.getElementById('main-wrapper');

    const displayBoard = (Player) => {        

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
                if (Player.name === 'Human') {
                    square.addEventListener('dragenter', dragEnter);
                    square.addEventListener('dragover', dragOver);
                    square.addEventListener('dragleave', dragLeave);
                    square.addEventListener('drop', drop);
                }
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
            updateShips(Player);
            if (Player.board.allSunk() === true) {
                const squares = document.querySelectorAll('.board-square');
                squares.forEach((square) => square.removeEventListener('click', humanAttack))
            }
        };
        
        function dragEnter(event) {
            event.preventDefault();
            event.target.classList.add('drag-over');
        }

        function dragOver(event) {
            event.preventDefault();
            event.target.classList.add('drag-over');
        };

        function dragLeave(event) {
            event.preventDefault();
            event.target.classList.remove('drag-over');
        }

        function drop(event) {
            event.preventDefault();
            event.target.classList.remove('drag-over');
            const length = event.dataTransfer.getData('text2');
            const direction = event.dataTransfer.getData('dir');
            const {coordinates} = event.target.dataset;            
            const placed = Player.board.placeShip(coordinates, +length, direction);
            
            if (placed === null) {
            const id = event.dataTransfer.getData('text/plain');
            const dragged = document.getElementById(id);
            dragged.classList.remove('hide');
            } else {
            const humanBoard = document.getElementById('Human');
            const squares = humanBoard.querySelectorAll('.board-square');
            squares.forEach((square) => {
                const checkSquare = square.dataset.coordinates;
                if (Player.board.filled.includes(checkSquare)) square.classList.add('filled');
            });
            const id = event.dataTransfer.getData('text/plain');
            const dragged = document.getElementById(id);
            dragged.classList.add('hide');
            }
        }
        
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

    const displayInfo = () => {
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info-div');
        infoDiv.setAttribute('id', 'info-div');
        main.appendChild(infoDiv);

        const infoTitle = document.createElement('div');
        infoTitle.classList.add('player-name');
        infoTitle.innerText = 'Info';
        infoDiv.appendChild(infoTitle);

        const remainingShips = document.createElement('div');
        remainingShips.classList.add('hide');
        remainingShips.setAttribute('id', 'remaining-ships');
        infoDiv.appendChild(remainingShips);

        const yourShipsDiv = document.createElement('div');
        yourShipsDiv.classList.add('remaining');
        remainingShips.appendChild(yourShipsDiv);

        const yourRemaining = document.createElement('div');
        yourRemaining.innerText = 'Your remaining ships: ';
        yourShipsDiv.appendChild(yourRemaining);
        const yourNumber = document.createElement('div');
        yourNumber.innerText = 'X';
        yourNumber.setAttribute('id', 'Human-ships');
        yourShipsDiv.appendChild(yourNumber);

        const compShipsDiv = document.createElement('div');
        compShipsDiv.classList.add('remaining');
        remainingShips.appendChild(compShipsDiv);

        const compRemaining = document.createElement('div');
        compRemaining.innerText = 'Computer\'s remaining ships: '
        compShipsDiv.appendChild(compRemaining);
        const compNumber = document.createElement('div');
        compNumber.innerText = 'X';
        compNumber.setAttribute('id', 'Computer-ships');
        compShipsDiv.appendChild(compNumber);

        const resetDiv = document.createElement('div');
        resetDiv.setAttribute('id', 'reset-div');
        infoDiv.appendChild(resetDiv);
        resetDiv.classList.add('hide')

        const resetButton = document.createElement('button');
        resetButton.classList.add('reset');
        resetButton.setAttribute('id', 'reset-button');
        resetDiv.appendChild(resetButton);
        resetButton.innerText = 'Reset Game';      
    };

    const startingInfo = () => {
        const infoDiv = document.getElementById('info-div');

        const instructionsDiv = document.createElement('div');
        instructionsDiv.setAttribute('id', 'instructions');
        infoDiv.appendChild(instructionsDiv);
        instructionsDiv.classList.add('remaining');

        const instructions = document.createElement('div');
        instructions.innerText = 'Drag the ships onto your board.'
        instructionsDiv.appendChild(instructions);
        instructions.classList.add('remaining');

        const startDiv = document.createElement('div');
        instructionsDiv.appendChild(startDiv);

        const startButton = document.createElement('button');
        startButton.classList.add('reset')
        startButton.setAttribute('id', 'start-button');
        startButton.innerText = 'Start Game';
        startDiv.appendChild(startButton);

        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons-div');
        buttonsDiv.setAttribute('id', 'buttons-div');
        instructionsDiv.appendChild(buttonsDiv);

        const rotateButton = document.createElement('button');
        rotateButton.classList.add('small-button');
        rotateButton.setAttribute('id', 'rotate-ships');
        rotateButton.innerText = 'Rotate Ships';
        buttonsDiv.appendChild(rotateButton);

        const resetShipsButton = document.createElement('button');
        resetShipsButton.classList.add('small-button');
        resetShipsButton.setAttribute('id', 'reset-ships');
        resetShipsButton.innerText = 'Reset Ships';
        buttonsDiv.appendChild(resetShipsButton);
    }

    const updateShips = (Player) => {
        const update = document.getElementById(`${Player.name}-ships`);
        let unsunk = Player.board.ships.length;
        Player.board.ships.forEach((ship) => {
            if (ship.isSunk() === true)
            unsunk -= 1;
        });
        update.innerText = unsunk;
    }

    const setShips = () => {
        const ships = [{length: 5, name: 'carrier'}, 
        {length: 4, name: 'battleship'},
        {length: 3, name: 'destroyer'},
        {length: 3, name: 'submarine'},
        {length: 2, name: 'patrolboat'}];
        
        const info = document.getElementById('info-div');
          
        const shipsDiv = document.createElement('div');
        shipsDiv.setAttribute('id', 'ships-div');
        shipsDiv.classList.add('ships-div', 'ships-hor');
        info.appendChild(shipsDiv);

        ships.forEach((ship) => {
            const newShip = createShip(ship.length, ship.name);
            shipsDiv.appendChild(newShip);
        });

        function dragStart(event) {
            event.dataTransfer.setData('text/plain', event.target.id);
            const {length} = event.target.dataset;
            event.dataTransfer.setData('text2', length);
            const {direction} = event.target.dataset
            event.dataTransfer.setData('dir', direction);      
        }

        function createShip(length, name) {
            const d = document.createElement('div');
            d.classList.add('ship', `${name}-hor`, 'horizontal');
            d.setAttribute('id', `${name}`);
            d.setAttribute('data-direction', 'hor');
            d.innerText = length;
            d.draggable = true;
            d.setAttribute('data-length', length);
            d.addEventListener('dragstart', dragStart);
            return d;
        }
    }

    const colorShips = (Player) => {
        const humanBoard = document.getElementById('Human');
        const squares = humanBoard.querySelectorAll('.board-square');
        squares.forEach((square) => {
            const checkSquare = square.dataset.coordinates;
            if (Player.board.filled.includes(checkSquare)) square.classList.add('filled');
        });
    };

    const startGame = (Player) => {
        if (Player.board.ships.length === 5) {
            const startInfo = document.getElementById('instructions');
            const remainingShips = document.getElementById('remaining-ships');
            const resetDiv = document.getElementById('reset-div');
            startInfo.classList.toggle('hide');
            remainingShips.classList.toggle('hide');
            resetDiv.classList.toggle('hide');
        };        
    }

    const rotateShips = () => {
        const shipsDiv = document.getElementById('ships-div');
        // shipsDiv.classList.toggle('rotate');
        const ships = shipsDiv.querySelectorAll('.ship');
        shipsDiv.classList.toggle('ships-hor');
        shipsDiv.classList.toggle('ships-ver');
        ships.forEach((ship) => {
            const {id} = ship;
            ship.classList.toggle(`${id}-hor`);
            ship.classList.toggle('horizontal');
            ship.classList.toggle('vertical');
            ship.classList.toggle(`${id}-ver`);
            const dir = ship.getAttribute('data-direction');
            if (dir === 'hor') ship.setAttribute('data-direction', 'ver');
            if (dir === 'ver') ship.setAttribute('data-direction', 'hor');
        });
    };

    return { displayBoard, changeColor, displayInfo, updateShips, setShips, colorShips, startingInfo, startGame, rotateShips }
};

