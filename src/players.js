const Players = Object.freeze({
    Circle: 1,
    Cross: 2,
});

/**
 * Returns the active players identifier.
 *
 * @param {Boolean} togglePlayer When true, toggle the active player.
 *
 * @returns {Number} Represents the current player, comparable with entries of
 * Players.
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
