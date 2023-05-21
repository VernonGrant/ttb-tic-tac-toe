import { GameState, gameStatus } from "./game.js";
import { indicatorUpdate } from "./indicator.js";
import { updatePanel, hidePanel, showPanel } from "./panel.js";
import { Players, activePlayer } from "./players.js";

/**
 * Immutable object that holds the tiles container element and its selector.
 */
const Tiles = {
    selector: undefined,
    element: undefined
};

/**
 * Extracts the tile states into a one dimensional array.
 *
 * @returns {Array{Number}}
 */
function extractTileStates() {
    const tiles = Tiles.element.childNodes;

    let states = [];
    for (let i = 0; i < tiles.length; i++) {
        states.push(Number(tiles[i].dataset.state));
    }

    return states;
}

/**
 * Removes all click event listeners from unused tiles.
 *
 * @returns {void}
 */
function clearActiveTileEvents() {
    const tiles = Tiles.element.childNodes;

    for (let i = 0; i < tiles.length; i++) {
        const item = tiles[i];
        if (Number(item.dataset.state) === 0) {
            item.removeEventListener("click", onTileClick);

        }
    }
}

/**
 * Gets called once a tile gets click.
 *
 * @param {Event} event The event handle coming from the tile click.
 *
 * @returns {void}
 */
function onTileClick(event) {
    // Change the state of the clicked on tile, based on the current player.
    event.target.dataset.state = activePlayer();

    // Remove the event listener of the clicked on tile.
    event.target.removeEventListener("click", onTileClick);

    // Panel reset button click function.
    const onResetButtonClick = function () {
        resetTiles();
        hidePanel();
    };

    // Get the current games state at this point in time.
    const status = gameStatus(extractTileStates(), activePlayer());
    if (status === GameState.Draw) {
        clearActiveTileEvents();
        updatePanel("There's no winner", "Draw", onResetButtonClick);
        showPanel();
    } else if (status === GameState.Player) {
        clearActiveTileEvents();
        updatePanel(
            "The winner is",
            activePlayer() === Players.Circle ? "circle" : "cross",
            onResetButtonClick
        );
        showPanel();
    } else {
        // Toggles the active player.
        activePlayer(true);
        indicatorUpdate();
    }
}

/**
 * Setups the initial tiles and its constant values, should only be called once.
 *
 * @param {string} selector
 *
 * @returns {void}
 */
function initializeTiles(selector) {
    Tiles.selector = selector;
    Tiles.element = document.querySelector(selector);
    Object.freeze(Tiles);

    constructTiles();
}

/**
 * Destroys all the current tiles and reconstructs new ones.
 *
 * @returns {void}
 */
function resetTiles() {
    const board = Tiles.element;
    while (board.firstChild) {
        board.removeChild(board.lastChild);
    }
    constructTiles();
}

/**
 * Handles the creation of all tiles.
 *
 * @returns {void}
 */
function constructTiles() {
    for (let i = 0; i < 9; i++) {
        const tile = document.createElement("div");
        tile.dataset.index = i;
        tile.dataset.state = 0;
        tile.classList.add("tile");
        tile.addEventListener("click", onTileClick);

        Tiles.element.append(tile);
    }
}

export { initializeTiles };
