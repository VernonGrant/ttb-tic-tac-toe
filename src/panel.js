const Panel = {
    selector: undefined,
    element: undefined
};

function updatePanel(preTitle, title, onReset) {
    Panel.element.querySelector("#title").innerHTML = title;
    Panel.element.querySelector("#pre-title").innerHTML = preTitle;
    Panel.element.querySelector("#button").addEventListener("click", onReset);
}

function hidePanel() {
    Panel.element.classList.remove("show");
}

function showPanel() {
    Panel.element.classList.add("show");
}

function initializePanel(selector) {
    Panel.selector = selector;
    Panel.element = document.querySelector(selector);
    Object.freeze(Panel);

    Panel.element.innerHTML = `
    <div class="panel-content">
        <div id="pre-title">Is the Winner</div>
        <div id="title">Circle</div>
        <hr>
        <button id="button">Reset</button>
    </div> `;
}

export { initializePanel, updatePanel, showPanel, hidePanel };
