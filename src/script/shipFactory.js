const shipFactory = (len) => {
    const length = len;
    let numberOfHits = 0;
    let sunk = false;

    const hit = () => {
        numberOfHits++;
    }

    const isSunk = () => {
        sunk = numberOfHits === length;
        return sunk;
    }

    return {
        length, 
        sunk,
        hit,
        isSunk,
    }
}

module.exports.shipFactory = shipFactory;