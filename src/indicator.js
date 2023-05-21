import { Players, activePlayer } from "./players";

/**
 * Immutable object that holds the indicator container element and its selector.
 */
const Indicator = {
    selector: undefined,
    element: undefined
};

/**
 * Setups the initial indicator and its constant values, should only be
 * called once.
 *
 * @param {string} selector The selector of the indicator container.
 *
 * @returns {void}
 */
function initializeIndicator(selector) {
    Indicator.selector = selector;
    Indicator.element = document.querySelector(selector);
    Object.freeze(Indicator);

    const circle = document.createElement("div");
    circle.classList.add("circle");

    const cross = document.createElement("div");
    cross.classList.add("cross");

    if (activePlayer() === Players.Circle) {
        circle.classList.add("active");
    } else {
        cross.classList.add("active");
    }

    Indicator.element.append(circle, cross);
}


/**
 * Updates the indicator to match the current player.
 *
 * @returns {void}
 */
function indicatorUpdate() {
    const cross = Indicator.element.querySelector(".cross");
    const circle = Indicator.element.querySelector(".circle");

    if (activePlayer() === Players.Circle) {
        cross.classList.remove("active");
        circle.classList.add("active");
    } else {
        circle.classList.remove("active");
        cross.classList.add("active");
    }
}

export { initializeIndicator, indicatorUpdate };
