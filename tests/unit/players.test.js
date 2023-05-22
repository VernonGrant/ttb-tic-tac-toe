import { expect, test } from "vitest";
import { Players, activePlayer } from "../../src/players";

test("The default player should be circle.", () => {
    expect(activePlayer()).toBe(Players.Circle);
});

test("The active player should remain the same if no argument has been provided.", () => {
    expect(activePlayer()).toBe(Players.Circle);
    expect(activePlayer()).toBe(Players.Circle);
});

test("The active player should change if true argument is provided.", () => {
    expect(activePlayer(true)).toBe(Players.Cross);
    expect(activePlayer(true)).toBe(Players.Circle);
    expect(activePlayer(true)).toBe(Players.Cross);
    expect(activePlayer(true)).toBe(Players.Circle);
    expect(activePlayer(true)).toBe(Players.Cross);
});
