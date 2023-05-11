import Player from "./player";

test('player board exists', () => {
    const human = new Player('Human');
    expect(human.board.letters.length).toBe(10);
});

test('player grid exists', () => {
    const human = new Player('Human');
    human.board.buildGrid();
    expect(human.board.squares.includes('e7')).toBe(true);
});

test('two different grids', () => {
    const human = new Player('Human');
    human.board.buildGrid();
    const computer = new Player('Computer');
    computer.board.buildGrid();
    human.board.receiveAttack('a1');
    expect(human.board.guessed.includes('a1')).toBe(true);
    expect(computer.board.guessed.includes('a1')).toBe(false);
});

test('two different grids 2', () => {
    const human = new Player('Human');
    human.board.buildGrid();
    const computer = new Player('Computer');
    computer.board.buildGrid();
    human.board.receiveAttack('a1');
    computer.board.receiveAttack('c3');
    expect(human.board.guessed.includes('a1')).toBe(true);
    expect(computer.board.guessed.includes('a1')).toBe(false);
    expect(human.board.guessed.includes('c3')).toBe(false);
    expect(computer.board.guessed.includes('c3')).toBe(true);
});

test('computer attack', () => {
    const human = new Player('Human');
    human.board.buildGrid();
    const computer = new Player('Computer');
    computer.board.buildGrid();
    const move = computer.generateAttack();
    human.board.receiveAttack(move);
    expect(human.board.guessed.includes(move)).toBe(true);
    expect(computer.myGuesses.includes(move)).toBe(true);
});
