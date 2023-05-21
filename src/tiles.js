import { GameState, gameStatus } from "./game";
import { indicatorUpdate } from "./indicator";
import { updatePanel, hidePanel, showPanel } from "./panel";
import { Players, activePlayer } from "./players";

const Tiles = {
    selector: undefined,
    element: undefined
};

/**
 * Extracts the states of tiles into a one dimensional array.
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

function clearActiveTileEvents() {
    const tiles = Tiles.element.childNodes;

    for (let i = 0; i < tiles.length; i++) {
        const item = tiles[i];
        if (Number(item.dataset.state) === 0) {
            item.removeEventListener("click", onTileClick);

        }
    }
}

/** @type {Event} */
function onTileClick(event) {
    // Change the state of the clicked on tile, based on the current player.
    event.target.dataset.state = activePlayer();

    // Remove the event listener of the clicked on tile.
    event.target.removeEventListener("click", onTileClick);

    const onResetButtonClick = function () {
        resetTiles();
        hidePanel();
    };

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

function initializeTiles(selector) {
    Tiles.selector = selector;
    Tiles.element = document.querySelector(selector);
    Object.freeze(Tiles);

    setupTiles();
}

function resetTiles() {
    const board = Tiles.element;
    while (board.firstChild) {
        board.removeChild(board.lastChild);
    }
    setupTiles();
}

function setupTiles() {
    for (let i = 0; i < 9; i++) {
        const tile = document.createElement("div");
        tile.dataset.index = i;
        tile.dataset.state = 0;
        tile.classList.add("tile");
        tile.addEventListener("click", onTileClick);

        Tiles.element.append(tile);
    }
}

function exampleMethod() {
    return 5;
}

export { initializeTiles, exampleMethod };
