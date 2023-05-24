/**
 * Immutable object that holds the identifiers for the players.
 */
const Players = Object.freeze({
    Circle: 1,
    Cross: 2,
});

/**
 * Returns the active players identifier. Handles its own internal state, by
 * simulating a static variable like behavior.
 *
 * @param {Boolean} togglePlayer When true, change the active player.
 *
 * @returns {Number} Represents the active player.
 */
function activePlayer(togglePlayer = false) {
    if (activePlayer.player === undefined) {
        activePlayer.player = Players.Circle;
    }

    if (togglePlayer) {
        if (activePlayer.player === Players.Circle) {
            activePlayer.player = Players.Cross;
        } else {
            activePlayer.player = Players.Circle;
        }
    }

    return activePlayer.player;
}

export { activePlayer, Players };
