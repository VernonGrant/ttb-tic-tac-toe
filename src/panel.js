/**
 * Immutable object that holds the panel container element and its selector.
 */
const Panel = {
    selector: undefined,
    element: undefined
};

/**
 * Updates the panels content with the given pre-title, title and on click
 * function.
 *
 * @param {string} preTitle The Panels pre-title text.
 * @param {string} title The Panels title text.
 * @param {CallableFunction} onReset The function to call on the reset button
 * click event.
 *
 * @returns {void}
 */
function updatePanel(preTitle, title, onReset) {
    Panel.element.querySelector("#title").innerHTML = title;
    Panel.element.querySelector("#pre-title").innerHTML = preTitle;
    Panel.element.querySelector("#button").addEventListener("click", onReset);
}

/**
 * Hides the panel.
 *
 * @returns {void}
 */
function hidePanel() {
    Panel.element.classList.remove("show");
}

/**
 * Shows the panel.
 *
 * @returns {void}
 */
function showPanel() {
    Panel.element.classList.add("show");
}

/**
 * Setups the initial panel and its constant values, should only be called once.
 *
 * @param {string} selector
 *
 * @returns {void}
 */
function initializePanel(selector) {
    Panel.selector = selector;
    Panel.element = document.querySelector(selector);
    Object.freeze(Panel);

    const panelContent = document.createElement("div");
    panelContent.classList.add("panel-content");

    const preTitle = document.createElement("div");
    preTitle.id = "pre-title";

    const title = document.createElement("div");
    title.id = "title";

    const hr = document.createElement("hr");

    const button = document.createElement("button");
    button.id = "button";
    button.innerText = "Reset";

    panelContent.append(preTitle, title, hr, button);
    Panel.element.append(panelContent);
}

export { initializePanel, updatePanel, showPanel, hidePanel };
