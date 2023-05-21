import { Players, activePlayer } from "./players";

const Indicator = {
    selector: undefined,
    element: undefined
};

function initializeIndicator(selector) {
    Indicator.selector = selector;
    Indicator.element = document.querySelector(selector);
    Object.freeze(Indicator);

    Indicator.element.innerHTML = `
        <div class="circle"></div>
        <div class="cross"></div>`;

    if (activePlayer() === Players.Circle) {
        Indicator.element.querySelector(".circle").classList.add("active");
    } else {
        Indicator.element.querySelector(".cross").classList.add("active");
    }
}

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
