/**
 * Immutable object that holds the game state identifiers.
 */
const GameState = Object.freeze({
    Pending: 0,
    Player: 1,
    Draw: 2,
});

/**
 * Takes in the current state, extracted from the tiles as a one dimensional
 * array. Where 0 represents neutrality, 1 represents circle and 2 represents
 * cross.
 *
 * @param {Array[Number]} state Array of tile states.
 * @param {Number} player The player to check against.
 *
 * @returns {GameState} The numerical represents of the game state.
 */
function gameStatus(state = [], player) {
    const stateLength = state.length;
    const stateSqrt = Math.sqrt(stateLength);

    // Check for winner by row.
    for (let i = 0; i < stateSqrt; i++) {
        let sum = 0;
        for (let j = i * 3; j < (stateSqrt * i) + stateSqrt; j++) {
            if (state[j] === player) {
                sum++;
            }
        }

        if (sum === 3) {
            return GameState.Player;
        }
    }

    // Check for winner by column.
    for (let i = 0; i < stateSqrt; i++) {
        if (state[i] === player &&
            state[i + 3] === player &&
            state[i + 6] === player) {
            return GameState.Player;
        }
    }

    // Check for winner by diagonals.
    if (state[2] === player &&
        state[4] === player &&
        state[6] === player) {
        return GameState.Player;
    }
    if (state[0] === player &&
        state[4] === player &&
        state[8] === player) {
        return GameState.Player;
    }

    // Check for a draw.
    let sum = 0;
    for (let i = 0; i < stateLength; i++) {
        if (state[i] !== 0) {
            sum++;
        }
    }
    if (sum === stateLength) {
        return GameState.Draw;
    }

    return GameState.Pending;
}

export { gameStatus, GameState };
