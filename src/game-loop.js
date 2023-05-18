import Player from "./factories/player";
import Dom from "./dom";

export default function playGame() {
    document.getElementById('main-wrapper').innerText = '';
    
    const dom = Dom();

    const human = new Player('Human');

    const computer = new Player('Computer');

    const players = [human, computer];

    let currentTurn = players[0];

    dom.displayBoard(human);
    dom.colorShips(human);

    dom.displayInfo();
    dom.startingInfo();

    document.getElementById('start-button').addEventListener('click', () => {dom.startGame(human)});

    dom.setShips();

    dom.displayBoard(computer);

    dom.updateShips(human);
    dom.updateShips(computer);

    document.getElementById('reset-button').addEventListener('click', playGame);

    const humanName = document.getElementById(`${human.name}-name`);
    const compName = document.getElementById(`${computer.name}-name`);

    humanName.classList.add('active-player');

    const compDiv = document.getElementById(`${computer.name}`);
    const compSquares = compDiv.querySelectorAll('.board-square');
    compSquares.forEach((square) => square.addEventListener('click', toggleActive));

    // Switch between turns - setTimeout used to give the impression the computer is 'thinking'
    function toggleActive() {
        if (human.board.allSunk() === false && computer.board.allSunk() === false) {
            currentTurn = currentTurn === players[0] ? players[1] : players[0];
            humanName.classList.toggle('active-player');
            compName.classList.toggle('active-player');

            if (currentTurn === players[1]) {
                setTimeout(() => {
                let guess = computer.generateAttack();
                while (guess === null) {
                    guess = computer.generateAttack();
                }            
                if (guess) {
                    human.board.receiveAttack(guess);
                    dom.changeColor(human, guess);
                    const guessDiv = compDiv.querySelector('[data-player="Computer"]');
                    guessDiv.innerText = `${guess}`;
                    dom.updateShips(human);
                    toggleActive();
                }
                }, 300);
            }         
        } else {
            compSquares.forEach((square) => square.removeEventListener('click', toggleActive));
            compSquares.forEach((square) => square.removeEventListener('click', dom.humanAttack));
            if (human.board.allSunk() === true) compName.innerText = 'COMPUTER WINS!';
            if (computer.board.allSunk() === true) humanName.innerText = 'YOU WIN!';
        }

    };   

};