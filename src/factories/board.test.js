import Board from "./board";

test('area', () => {
    const board = new Board(3, 3);
    expect(board.area).toBe(9);
});

test('square exists', () => {
    const board = new Board();
    board.buildGrid();
    expect(board.squares.includes('a1')).toBe(true);
});

test('row 10 exists', () => {
    const board = new Board();
    board.buildGrid();
    expect(board.squares.includes('a10')).toBe(true);
})

test('ship placed', () => {
    const board = new Board();
    board.buildGrid();
    board.placeShip('a1', 3);
    expect(board.filled.includes('a1')).toBe(true);
});

test('no ship', () => {
    const board = new Board();
    board.buildGrid()
    board.placeShip('a1', 3);
    expect(board.filled.includes('j3')).toBe(false);
});

test('longer ship', () => {
    const board = new Board();
    board.buildGrid();
    board.placeShip('a1', 3);
    expect(board.filled.includes('a3')).toBe(true);
});

test('longer ship 2', () => {
    const board = new Board();
    board.buildGrid();
    board.placeShip('a1', 3);
    expect(board.filled.includes('a4')).toBe(false);
});

test('off the board', () => {
    const board = new Board();
    board.buildGrid();
    board.placeShip('a9', 3);
    expect(board.filled.includes('a9')).toBe(false);
});

test('test row 10', () => {
    const board = new Board();
    board.buildGrid();
    board.placeShip('a10', 1);
    expect(board.filled.includes('a10')).toBe(true);
});

test('place new ship', () => {
    const board = new Board();
    board.buildGrid();
    expect(board.placeShip('a1', 3)).toEqual({length: 3, hits: 0, coordinates: ['a1', 'a2', 'a3'], sunk: false});
});

test('return off the board', () => {
    const board = new Board();
    board.buildGrid();    
    expect(board.placeShip('a9', 3)).toBe(null);
});

test('ships array', () => {
    const board = new Board();
    board.buildGrid();
    board.placeShip('a1', 3);
    expect(board.ships).toEqual([{length: 3, hits: 0, coordinates: ['a1', 'a2', 'a3'], sunk: false}]);
});

test('vertical ship', () => {
    const board = new Board();
    board.buildGrid();
    board.placeShip('d1', 1, 'ver');
    expect(board.filled.includes('d1')).toBe(true);
});

test('vertical ship length', () => {
    const board = new Board();
    board.buildGrid();
    board.placeShip('d1', 3, 'ver');
    expect(board.filled.includes('f1')).toBe(true);
});

test('vertical ship length false', () => {
    const board = new Board();
    board.buildGrid();
    board.placeShip('d1', 3, 'ver');
    expect(board.filled.includes('d2')).toBe(false);
});

test('ver return off the board', () => {
    const board = new Board();
    board.buildGrid();
    expect(board.placeShip('j9', 3, 'ver')).toBe(null);
});

test('add attack to guessed', () => {
    const board = new Board();
    board.buildGrid();
    board.receiveAttack('f4');
    expect(board.guessed.includes('f4')).toBe(true);
});

test('add attack to guessed 2', () => {
    const board = new Board();
    board.buildGrid();
    board.receiveAttack('f4');
    expect(board.guessed.includes('e4')).toBe(false);
});

test('add hit to ship', () => {
    const board = new Board();
    board.buildGrid();
    board.placeShip('f4', 3, 'ver');
    board.receiveAttack('f4');
    expect(board.ships[0].hits).toBe(1);
});

test('miss ship', () => {
    const board = new Board();
    board.buildGrid();
    board.placeShip('f4', 3, 'ver');
    board.receiveAttack('f5');
    expect(board.ships[0].hits).toBe(0);
});

test('sunk ship', () => {
    const board = new Board();
    board.buildGrid();
    board.placeShip('f4', 1, 'ver');
    board.receiveAttack('f4');
    expect(board.ships[0].sunk).toBe(true);
});

test('not sunk ship 1', () => {
    const board = new Board();
    board.buildGrid();
    board.placeShip('f4', 1, 'ver');
    board.receiveAttack('f5');
    expect(board.ships[0].sunk).toBe(false);
});

test('not sunk ship 2', () => {
    const board = new Board();
    board.buildGrid();
    board.placeShip('f4', 3, 'ver');
    board.receiveAttack('f4');
    expect(board.ships[0].sunk).toBe(false);
});

test('all sunk', () => {
    const board = new Board();
    board.buildGrid();
    board.placeShip('f4', 1, 'ver');
    board.receiveAttack('f4');
    expect(board.allSunk()).toBe(true);
});

test('all sunk false', () => {
    const board = new Board();
    board.buildGrid();
    board.placeShip('f4', 1, 'ver');
    board.receiveAttack('f5');
    expect(board.allSunk()).toBe(false);
})

test('all sunk false multiple ships', () => {
    const board = new Board();
    board.buildGrid();
    board.placeShip('f4', 1, 'ver');
    board.placeShip('a1', 3);
    board.receiveAttack('f4');
    expect(board.allSunk()).toBe(false);
});

test('all sunk no ships', () => {
    const board = new Board();
    board.buildGrid();
    board.receiveAttack('f4');
    expect(board.allSunk()).toBe(false);
})