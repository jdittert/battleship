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
    expect(board.ships.includes('a1')).toBe(true);
});

test('no ship', () => {
    const board = new Board();
    board.buildGrid()
    board.placeShip('a1', 3);
    expect(board.ships.includes('j3')).toBe(false);
});

test('longer ship', () => {
    const board = new Board();
    board.buildGrid();
    board.placeShip('a1', 3);
    expect(board.ships.includes('a3')).toBe(true);
});

test('longer ship 2', () => {
    const board = new Board();
    board.buildGrid();
    board.placeShip('a1', 3);
    expect(board.ships.includes('a4')).toBe(false);
});

test('off the board', () => {
    const board = new Board();
    board.buildGrid();
    board.placeShip('a9', 3);
    expect(board.ships.includes('a9')).toBe(false);
});

test('test row 10', () => {
    const board = new Board();
    board.buildGrid();
    board.placeShip('a10', 1);
    expect(board.ships.includes('a10')).toBe(true);
});

test('place new ship', () => {
    const board = new Board();
    board.buildGrid();
    expect(board.placeShip('a1', 3)).toEqual({length: 3, hits: 0, coordinates: ['a1', 'a2', 'a3']});
});

test('return off the board', () => {
    const board = new Board();
    board.buildGrid();    
    expect(board.placeShip('a9', 3)).toBe(null);
});