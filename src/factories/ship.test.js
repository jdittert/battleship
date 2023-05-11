import Ship from "./ship";

test('ship', () => {
    expect(new Ship(5)).toEqual({length: 5, hits: 0, coordinates: []});
});

test('not sunk', () => {
    const ship = new Ship(1);
    expect(ship.isSunk()).toBe(false);
});

test('hit', () => {
    const ship = new Ship(1);
    ship.hit();
    expect(ship.hits).toBe(1);
});

test('sunk', () => {
    const ship = new Ship(1);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
});

test('multiple hits', () => {
    const ship = new Ship(4);
    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(2);
});

test('multiple hits not sunk', () => {
    const ship = new Ship(4);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
});