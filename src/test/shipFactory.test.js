import { shipFactory } from "../script/shipFactory";

const ship = shipFactory(2);

test('ship length to be 2', ()=>{
    expect(ship.length).toBe(2);
});

test('ship sunk property to be false', ()=>{
    expect(ship.sunk).toBeFalsy();
});

test('when hit() is called, isSunk() returns false', ()=>{
    ship.hit();
    expect(ship.isSunk()).toBeFalsy();
});

test('when hit() is called twice, isSunk() returns true', ()=>{
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();  
});
