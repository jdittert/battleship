import Player from "./factories/player";
import displayBoard from "./dom";

export default function playGame() {

    const human = new Player('Human');

    const computer = new Player('Computer');

    const players = [human, computer];

    let currentTurn = players[0];

    displayBoard(human.name);

    displayBoard(computer.name);

    const humanName = document.getElementById(`${human.name}-name`);
    const compName = document.getElementById(`${computer.name}-name`);

    humanName.classList.add('active-player');

    const main = document.getElementById('main-wrapper');

    main.addEventListener('click', toggleActive);

    function toggleActive() {
        currentTurn = currentTurn === players[0] ? players[1] : players[0];
        humanName.classList.toggle('active-player');
        compName.classList.toggle('active-player');
    }

};