
import { expect, test } from "vitest";
import { GameState, gameStatus } from "../../src/game";

test("Wins when occupying an entire row.", () => {
    expect(gameStatus([1, 1, 1, 0, 0, 0, 0, 0, 0], 1)).toBe(GameState.Player);
    expect(gameStatus([0, 0, 0, 1, 1, 1, 0, 0, 0], 1)).toBe(GameState.Player);
    expect(gameStatus([0, 0, 0, 0, 0, 0, 1, 1, 1], 1)).toBe(GameState.Player);
});

test("Wins when occupying an entire column.", () => {
    expect(gameStatus([1, 0, 0, 1, 0, 0, 1, 0, 0], 1)).toBe(GameState.Player);
    expect(gameStatus([0, 1, 0, 0, 1, 0, 0, 1, 0], 1)).toBe(GameState.Player);
    expect(gameStatus([0, 0, 1, 0, 0, 1, 0, 0, 1], 1)).toBe(GameState.Player);
});

test("Wins when occupying one of two diagonals.", () => {
    expect(gameStatus([1, 0, 0, 0, 1, 0, 0, 0, 1], 1)).toBe(GameState.Player);
    expect(gameStatus([0, 0, 1, 0, 1, 0, 1, 0, 0], 1)).toBe(GameState.Player);
});

test("Pending when there's rounds left and no winner was found.", () => {
    expect(gameStatus([0, 0, 0, 0, 0, 0, 0, 0, 0], 1)).toBe(GameState.Pending);
    expect(gameStatus([1, 0, 0, 0, 0, 0, 0, 0, 0], 1)).toBe(GameState.Pending);
    expect(gameStatus([1, 0, 2, 0, 1, 0, 0, 2, 0], 1)).toBe(GameState.Pending);
    expect(gameStatus([1, 0, 2, 0, 1, 0, 0, 2, 0], 2)).toBe(GameState.Pending);
    expect(gameStatus([2, 1, 2, 2, 1, 1, 1, 2, 0], 1)).toBe(GameState.Pending);
    expect(gameStatus([2, 1, 2, 2, 1, 1, 1, 2, 0], 2)).toBe(GameState.Pending);
    expect(gameStatus([0, 2, 0, 1, 1, 2, 2, 2, 1], 1)).toBe(GameState.Pending);
    expect(gameStatus([0, 1, 0, 1, 1, 2, 2, 2, 1], 2)).toBe(GameState.Pending);
    expect(gameStatus([2, 2, 1, 1, 1, 2, 0, 2, 1], 1)).toBe(GameState.Pending);
    expect(gameStatus([2, 2, 1, 1, 1, 2, 0, 2, 1], 2)).toBe(GameState.Pending);
});

/**
 * All winning permutations for a single player.
 */
const WinPermutations = [
    [0, 0, 0, 0, 2, 2, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 0, 2, 2],
    [0, 0, 0, 1, 1, 1, 2, 0, 2],
    [0, 0, 0, 1, 1, 1, 2, 2, 0],
    [0, 0, 0, 2, 0, 2, 1, 1, 1],
    [0, 0, 0, 2, 2, 0, 1, 1, 1],
    [0, 0, 1, 0, 0, 1, 2, 2, 1],
    [0, 0, 1, 0, 1, 0, 1, 2, 2],
    [0, 0, 1, 0, 1, 2, 1, 0, 2],
    [0, 0, 1, 0, 1, 2, 1, 2, 0],
    [0, 0, 1, 0, 2, 1, 0, 2, 1],
    [0, 0, 1, 0, 2, 1, 2, 0, 1],
    [0, 0, 1, 1, 1, 2, 1, 2, 2],
    [0, 0, 1, 1, 2, 1, 2, 2, 1],
    [0, 0, 1, 2, 0, 1, 0, 2, 1],
    [0, 0, 1, 2, 0, 1, 2, 0, 1],
    [0, 0, 1, 2, 1, 0, 1, 0, 2],
    [0, 0, 1, 2, 1, 0, 1, 2, 0],
    [0, 0, 1, 2, 1, 1, 1, 2, 2],
    [0, 0, 1, 2, 1, 1, 2, 2, 1],
    [0, 0, 1, 2, 1, 2, 1, 0, 0],
    [0, 0, 1, 2, 1, 2, 1, 1, 2],
    [0, 0, 1, 2, 1, 2, 1, 2, 1],
    [0, 0, 1, 2, 2, 1, 0, 0, 1],
    [0, 0, 1, 2, 2, 1, 1, 2, 1],
    [0, 0, 1, 2, 2, 1, 2, 1, 1],
    [0, 0, 2, 0, 0, 2, 1, 1, 1],
    [0, 0, 2, 0, 2, 0, 1, 1, 1],
    [0, 0, 2, 1, 1, 1, 0, 0, 2],
    [0, 0, 2, 1, 1, 1, 0, 2, 0],
    [0, 0, 2, 1, 1, 1, 1, 2, 2],
    [0, 0, 2, 1, 1, 1, 2, 0, 0],
    [0, 0, 2, 1, 1, 1, 2, 1, 2],
    [0, 0, 2, 1, 1, 1, 2, 2, 1],
    [0, 0, 2, 1, 2, 2, 1, 1, 1],
    [0, 0, 2, 2, 0, 0, 1, 1, 1],
    [0, 0, 2, 2, 1, 2, 1, 1, 1],
    [0, 0, 2, 2, 2, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 0, 2, 1, 2],
    [0, 1, 0, 0, 1, 2, 0, 1, 2],
    [0, 1, 0, 0, 1, 2, 2, 1, 0],
    [0, 1, 0, 1, 1, 2, 2, 1, 2],
    [0, 1, 0, 2, 1, 0, 0, 1, 2],
    [0, 1, 0, 2, 1, 0, 2, 1, 0],
    [0, 1, 0, 2, 1, 1, 2, 1, 2],
    [0, 1, 0, 2, 1, 2, 0, 1, 0],
    [0, 1, 0, 2, 1, 2, 1, 1, 2],
    [0, 1, 0, 2, 1, 2, 2, 1, 1],
    [0, 1, 1, 0, 1, 2, 1, 2, 2],
    [0, 1, 1, 0, 1, 2, 2, 1, 2],
    [0, 1, 1, 0, 2, 1, 2, 2, 1],
    [0, 1, 1, 2, 0, 1, 2, 2, 1],
    [0, 1, 1, 2, 1, 0, 1, 2, 2],
    [0, 1, 1, 2, 1, 0, 2, 1, 2],
    [0, 1, 1, 2, 1, 2, 0, 1, 2],
    [0, 1, 1, 2, 1, 2, 1, 0, 2],
    [0, 1, 1, 2, 1, 2, 1, 2, 0],
    [0, 1, 1, 2, 1, 2, 2, 1, 0],
    [0, 1, 1, 2, 2, 1, 0, 2, 1],
    [0, 1, 1, 2, 2, 1, 2, 0, 1],
    [0, 1, 2, 0, 1, 0, 0, 1, 2],
    [0, 1, 2, 0, 1, 0, 2, 1, 0],
    [0, 1, 2, 0, 1, 1, 2, 1, 2],
    [0, 1, 2, 0, 1, 2, 0, 1, 0],
    [0, 1, 2, 0, 1, 2, 2, 1, 1],
    [0, 1, 2, 0, 2, 2, 1, 1, 1],
    [0, 1, 2, 1, 1, 0, 2, 1, 2],
    [0, 1, 2, 1, 1, 1, 0, 2, 2],
    [0, 1, 2, 1, 1, 1, 2, 0, 2],
    [0, 1, 2, 1, 1, 1, 2, 2, 0],
    [0, 1, 2, 1, 1, 2, 2, 1, 0],
    [0, 1, 2, 2, 0, 2, 1, 1, 1],
    [0, 1, 2, 2, 1, 0, 0, 1, 0],
    [0, 1, 2, 2, 1, 0, 1, 1, 2],
    [0, 1, 2, 2, 1, 0, 2, 1, 1],
    [0, 1, 2, 2, 1, 1, 0, 1, 2],
    [0, 1, 2, 2, 1, 1, 2, 1, 0],
    [0, 1, 2, 2, 1, 2, 0, 1, 1],
    [0, 1, 2, 2, 1, 2, 1, 1, 0],
    [0, 1, 2, 2, 2, 0, 1, 1, 1],
    [0, 2, 0, 0, 0, 2, 1, 1, 1],
    [0, 2, 0, 0, 2, 0, 1, 1, 1],
    [0, 2, 0, 1, 1, 1, 0, 0, 2],
    [0, 2, 0, 1, 1, 1, 0, 2, 0],
    [0, 2, 0, 1, 1, 1, 1, 2, 2],
    [0, 2, 0, 1, 1, 1, 2, 0, 0],
    [0, 2, 0, 1, 1, 1, 2, 1, 2],
    [0, 2, 0, 1, 1, 1, 2, 2, 1],
    [0, 2, 0, 1, 2, 2, 1, 1, 1],
    [0, 2, 0, 2, 0, 0, 1, 1, 1],
    [0, 2, 0, 2, 1, 2, 1, 1, 1],
    [0, 2, 0, 2, 2, 1, 1, 1, 1],
    [0, 2, 1, 0, 0, 1, 0, 2, 1],
    [0, 2, 1, 0, 0, 1, 2, 0, 1],
    [0, 2, 1, 0, 1, 0, 1, 0, 2],
    [0, 2, 1, 0, 1, 0, 1, 2, 0],
    [0, 2, 1, 0, 1, 1, 1, 2, 2],
    [0, 2, 1, 0, 1, 1, 2, 2, 1],
    [0, 2, 1, 0, 1, 2, 1, 0, 0],
    [0, 2, 1, 0, 1, 2, 1, 1, 2],
    [0, 2, 1, 0, 1, 2, 1, 2, 1],
    [0, 2, 1, 0, 2, 1, 0, 0, 1],
    [0, 2, 1, 0, 2, 1, 2, 1, 1],
    [0, 2, 1, 0, 2, 2, 1, 1, 1],
    [0, 2, 1, 1, 0, 1, 2, 2, 1],
    [0, 2, 1, 1, 1, 0, 1, 2, 2],
    [0, 2, 1, 1, 1, 1, 0, 2, 2],
    [0, 2, 1, 1, 1, 1, 2, 0, 2],
    [0, 2, 1, 1, 1, 1, 2, 2, 0],
    [0, 2, 1, 1, 1, 2, 1, 0, 2],
    [0, 2, 1, 1, 1, 2, 1, 2, 0],
    [0, 2, 1, 1, 2, 1, 2, 0, 1],
    [0, 2, 1, 2, 0, 1, 0, 0, 1],
    [0, 2, 1, 2, 0, 1, 1, 2, 1],
    [0, 2, 1, 2, 0, 1, 2, 1, 1],
    [0, 2, 1, 2, 0, 2, 1, 1, 1],
    [0, 2, 1, 2, 1, 0, 1, 0, 0],
    [0, 2, 1, 2, 1, 0, 1, 1, 2],
    [0, 2, 1, 2, 1, 0, 1, 2, 1],
    [0, 2, 1, 2, 1, 1, 0, 2, 1],
    [0, 2, 1, 2, 1, 1, 1, 0, 2],
    [0, 2, 1, 2, 1, 1, 1, 2, 0],
    [0, 2, 1, 2, 1, 1, 2, 0, 1],
    [0, 2, 1, 2, 1, 2, 1, 0, 1],
    [0, 2, 1, 2, 1, 2, 1, 1, 0],
    [0, 2, 1, 2, 2, 0, 1, 1, 1],
    [0, 2, 1, 2, 2, 1, 0, 1, 1],
    [0, 2, 1, 2, 2, 1, 1, 0, 1],
    [0, 2, 2, 0, 0, 0, 1, 1, 1],
    [0, 2, 2, 0, 1, 2, 1, 1, 1],
    [0, 2, 2, 0, 2, 1, 1, 1, 1],
    [0, 2, 2, 1, 0, 2, 1, 1, 1],
    [0, 2, 2, 1, 1, 1, 0, 0, 0],
    [0, 2, 2, 1, 1, 1, 0, 1, 2],
    [0, 2, 2, 1, 1, 1, 0, 2, 1],
    [0, 2, 2, 1, 1, 1, 1, 0, 2],
    [0, 2, 2, 1, 1, 1, 1, 2, 0],
    [0, 2, 2, 1, 1, 1, 2, 0, 1],
    [0, 2, 2, 1, 1, 1, 2, 1, 0],
    [0, 2, 2, 1, 2, 0, 1, 1, 1],
    [0, 2, 2, 2, 0, 1, 1, 1, 1],
    [0, 2, 2, 2, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 2, 2, 1],
    [1, 0, 0, 0, 1, 2, 0, 2, 1],
    [1, 0, 0, 0, 1, 2, 2, 0, 1],
    [1, 0, 0, 1, 0, 0, 1, 2, 2],
    [1, 0, 0, 1, 0, 2, 1, 0, 2],
    [1, 0, 0, 1, 0, 2, 1, 2, 0],
    [1, 0, 0, 1, 1, 2, 1, 2, 2],
    [1, 0, 0, 1, 1, 2, 2, 2, 1],
    [1, 0, 0, 1, 2, 0, 1, 0, 2],
    [1, 0, 0, 1, 2, 0, 1, 2, 0],
    [1, 0, 0, 1, 2, 1, 1, 2, 2],
    [1, 0, 0, 1, 2, 2, 1, 0, 0],
    [1, 0, 0, 1, 2, 2, 1, 1, 2],
    [1, 0, 0, 1, 2, 2, 1, 2, 1],
    [1, 0, 0, 2, 1, 0, 0, 2, 1],
    [1, 0, 0, 2, 1, 0, 2, 0, 1],
    [1, 0, 0, 2, 1, 1, 2, 2, 1],
    [1, 0, 0, 2, 1, 2, 0, 0, 1],
    [1, 0, 0, 2, 1, 2, 1, 2, 1],
    [1, 0, 0, 2, 1, 2, 2, 1, 1],
    [1, 0, 1, 0, 1, 2, 1, 2, 2],
    [1, 0, 1, 0, 1, 2, 2, 2, 1],
    [1, 0, 1, 0, 2, 1, 2, 2, 1],
    [1, 0, 1, 1, 0, 2, 1, 2, 2],
    [1, 0, 1, 1, 2, 0, 1, 2, 2],
    [1, 0, 1, 1, 2, 2, 1, 0, 2],
    [1, 0, 1, 1, 2, 2, 1, 2, 0],
    [1, 0, 1, 2, 0, 1, 2, 2, 1],
    [1, 0, 1, 2, 1, 0, 1, 2, 2],
    [1, 0, 1, 2, 1, 0, 2, 2, 1],
    [1, 0, 1, 2, 1, 2, 0, 2, 1],
    [1, 0, 1, 2, 1, 2, 1, 0, 2],
    [1, 0, 1, 2, 1, 2, 1, 2, 0],
    [1, 0, 1, 2, 1, 2, 2, 0, 1],
    [1, 0, 1, 2, 2, 1, 0, 2, 1],
    [1, 0, 1, 2, 2, 1, 2, 0, 1],
    [1, 0, 2, 0, 1, 0, 0, 2, 1],
    [1, 0, 2, 0, 1, 0, 2, 0, 1],
    [1, 0, 2, 0, 1, 1, 2, 2, 1],
    [1, 0, 2, 0, 1, 2, 0, 0, 1],
    [1, 0, 2, 0, 1, 2, 1, 2, 1],
    [1, 0, 2, 0, 1, 2, 2, 1, 1],
    [1, 0, 2, 0, 2, 2, 1, 1, 1],
    [1, 0, 2, 1, 0, 0, 1, 0, 2],
    [1, 0, 2, 1, 0, 0, 1, 2, 0],
    [1, 0, 2, 1, 0, 1, 1, 2, 2],
    [1, 0, 2, 1, 0, 2, 1, 0, 0],
    [1, 0, 2, 1, 0, 2, 1, 2, 1],
    [1, 0, 2, 1, 1, 0, 1, 2, 2],
    [1, 0, 2, 1, 1, 0, 2, 2, 1],
    [1, 0, 2, 1, 1, 1, 0, 2, 2],
    [1, 0, 2, 1, 1, 1, 2, 0, 2],
    [1, 0, 2, 1, 1, 1, 2, 2, 0],
    [1, 0, 2, 1, 1, 2, 0, 2, 1],
    [1, 0, 2, 1, 1, 2, 1, 2, 0],
    [1, 0, 2, 1, 1, 2, 2, 0, 1],
    [1, 0, 2, 1, 2, 0, 1, 0, 0],
    [1, 0, 2, 1, 2, 0, 1, 1, 2],
    [1, 0, 2, 1, 2, 0, 1, 2, 1],
    [1, 0, 2, 1, 2, 1, 1, 0, 2],
    [1, 0, 2, 1, 2, 1, 1, 2, 0],
    [1, 0, 2, 1, 2, 2, 1, 0, 1],
    [1, 0, 2, 1, 2, 2, 1, 1, 0],
    [1, 0, 2, 2, 0, 2, 1, 1, 1],
    [1, 0, 2, 2, 1, 0, 0, 0, 1],
    [1, 0, 2, 2, 1, 0, 1, 2, 1],
    [1, 0, 2, 2, 1, 0, 2, 1, 1],
    [1, 0, 2, 2, 1, 1, 0, 2, 1],
    [1, 0, 2, 2, 1, 1, 2, 0, 1],
    [1, 0, 2, 2, 1, 2, 0, 1, 1],
    [1, 0, 2, 2, 1, 2, 1, 0, 1],
    [1, 0, 2, 2, 2, 0, 1, 1, 1],
    [1, 1, 0, 0, 1, 2, 2, 1, 2],
    [1, 1, 0, 0, 1, 2, 2, 2, 1],
    [1, 1, 0, 1, 0, 2, 1, 2, 2],
    [1, 1, 0, 1, 2, 0, 1, 2, 2],
    [1, 1, 0, 1, 2, 2, 1, 0, 2],
    [1, 1, 0, 1, 2, 2, 1, 2, 0],
    [1, 1, 0, 2, 1, 0, 2, 1, 2],
    [1, 1, 0, 2, 1, 0, 2, 2, 1],
    [1, 1, 0, 2, 1, 2, 0, 1, 2],
    [1, 1, 0, 2, 1, 2, 0, 2, 1],
    [1, 1, 0, 2, 1, 2, 2, 0, 1],
    [1, 1, 0, 2, 1, 2, 2, 1, 0],
    [1, 1, 1, 0, 0, 0, 0, 2, 2],
    [1, 1, 1, 0, 0, 0, 2, 0, 2],
    [1, 1, 1, 0, 0, 0, 2, 2, 0],
    [1, 1, 1, 0, 0, 2, 0, 0, 2],
    [1, 1, 1, 0, 0, 2, 0, 2, 0],
    [1, 1, 1, 0, 0, 2, 1, 2, 2],
    [1, 1, 1, 0, 0, 2, 2, 0, 0],
    [1, 1, 1, 0, 0, 2, 2, 1, 2],
    [1, 1, 1, 0, 0, 2, 2, 2, 1],
    [1, 1, 1, 0, 1, 2, 0, 2, 2],
    [1, 1, 1, 0, 1, 2, 2, 0, 2],
    [1, 1, 1, 0, 1, 2, 2, 2, 0],
    [1, 1, 1, 0, 2, 0, 0, 0, 2],
    [1, 1, 1, 0, 2, 0, 0, 2, 0],
    [1, 1, 1, 0, 2, 0, 1, 2, 2],
    [1, 1, 1, 0, 2, 0, 2, 0, 0],
    [1, 1, 1, 0, 2, 0, 2, 1, 2],
    [1, 1, 1, 0, 2, 0, 2, 2, 1],
    [1, 1, 1, 0, 2, 1, 0, 2, 2],
    [1, 1, 1, 0, 2, 1, 2, 0, 2],
    [1, 1, 1, 0, 2, 1, 2, 2, 0],
    [1, 1, 1, 0, 2, 2, 0, 0, 0],
    [1, 1, 1, 0, 2, 2, 0, 1, 2],
    [1, 1, 1, 0, 2, 2, 0, 2, 1],
    [1, 1, 1, 0, 2, 2, 1, 0, 2],
    [1, 1, 1, 0, 2, 2, 1, 2, 0],
    [1, 1, 1, 0, 2, 2, 2, 0, 1],
    [1, 1, 1, 0, 2, 2, 2, 1, 0],
    [1, 1, 1, 1, 0, 2, 0, 2, 2],
    [1, 1, 1, 1, 0, 2, 2, 0, 2],
    [1, 1, 1, 1, 0, 2, 2, 2, 0],
    [1, 1, 1, 1, 2, 0, 0, 2, 2],
    [1, 1, 1, 1, 2, 0, 2, 0, 2],
    [1, 1, 1, 1, 2, 0, 2, 2, 0],
    [1, 1, 1, 1, 2, 2, 0, 0, 2],
    [1, 1, 1, 1, 2, 2, 0, 2, 0],
    [1, 1, 1, 1, 2, 2, 1, 2, 2],
    [1, 1, 1, 1, 2, 2, 2, 0, 0],
    [1, 1, 1, 1, 2, 2, 2, 1, 2],
    [1, 1, 1, 1, 2, 2, 2, 2, 1],
    [1, 1, 1, 2, 0, 0, 0, 0, 2],
    [1, 1, 1, 2, 0, 0, 0, 2, 0],
    [1, 1, 1, 2, 0, 0, 1, 2, 2],
    [1, 1, 1, 2, 0, 0, 2, 0, 0],
    [1, 1, 1, 2, 0, 0, 2, 1, 2],
    [1, 1, 1, 2, 0, 0, 2, 2, 1],
    [1, 1, 1, 2, 0, 1, 0, 2, 2],
    [1, 1, 1, 2, 0, 1, 2, 0, 2],
    [1, 1, 1, 2, 0, 1, 2, 2, 0],
    [1, 1, 1, 2, 0, 2, 0, 0, 0],
    [1, 1, 1, 2, 0, 2, 0, 1, 2],
    [1, 1, 1, 2, 0, 2, 0, 2, 1],
    [1, 1, 1, 2, 0, 2, 1, 0, 2],
    [1, 1, 1, 2, 0, 2, 1, 2, 0],
    [1, 1, 1, 2, 0, 2, 2, 0, 1],
    [1, 1, 1, 2, 0, 2, 2, 1, 0],
    [1, 1, 1, 2, 1, 0, 0, 2, 2],
    [1, 1, 1, 2, 1, 0, 2, 0, 2],
    [1, 1, 1, 2, 1, 0, 2, 2, 0],
    [1, 1, 1, 2, 1, 2, 0, 0, 2],
    [1, 1, 1, 2, 1, 2, 0, 2, 0],
    [1, 1, 1, 2, 1, 2, 1, 2, 2],
    [1, 1, 1, 2, 1, 2, 2, 0, 0],
    [1, 1, 1, 2, 1, 2, 2, 1, 2],
    [1, 1, 1, 2, 1, 2, 2, 2, 1],
    [1, 1, 1, 2, 2, 0, 0, 0, 0],
    [1, 1, 1, 2, 2, 0, 0, 1, 2],
    [1, 1, 1, 2, 2, 0, 0, 2, 1],
    [1, 1, 1, 2, 2, 0, 1, 0, 2],
    [1, 1, 1, 2, 2, 0, 1, 2, 0],
    [1, 1, 1, 2, 2, 0, 2, 0, 1],
    [1, 1, 1, 2, 2, 0, 2, 1, 0],
    [1, 1, 1, 2, 2, 1, 0, 0, 2],
    [1, 1, 1, 2, 2, 1, 0, 2, 0],
    [1, 1, 1, 2, 2, 1, 1, 2, 2],
    [1, 1, 1, 2, 2, 1, 2, 0, 0],
    [1, 1, 1, 2, 2, 1, 2, 1, 2],
    [1, 1, 1, 2, 2, 1, 2, 2, 1],
    [1, 1, 2, 0, 1, 0, 2, 1, 2],
    [1, 1, 2, 0, 1, 0, 2, 2, 1],
    [1, 1, 2, 0, 1, 2, 0, 2, 1],
    [1, 1, 2, 0, 1, 2, 2, 0, 1],
    [1, 1, 2, 0, 1, 2, 2, 1, 0],
    [1, 1, 2, 1, 0, 0, 1, 2, 2],
    [1, 1, 2, 1, 0, 2, 1, 2, 0],
    [1, 1, 2, 1, 1, 2, 2, 2, 1],
    [1, 1, 2, 1, 2, 0, 1, 0, 2],
    [1, 1, 2, 1, 2, 0, 1, 2, 0],
    [1, 1, 2, 1, 2, 1, 1, 2, 2],
    [1, 1, 2, 1, 2, 2, 1, 0, 0],
    [1, 1, 2, 1, 2, 2, 1, 2, 1],
    [1, 1, 2, 2, 1, 0, 0, 1, 2],
    [1, 1, 2, 2, 1, 0, 0, 2, 1],
    [1, 1, 2, 2, 1, 0, 2, 0, 1],
    [1, 1, 2, 2, 1, 0, 2, 1, 0],
    [1, 1, 2, 2, 1, 1, 2, 1, 2],
    [1, 1, 2, 2, 1, 1, 2, 2, 1],
    [1, 1, 2, 2, 1, 2, 0, 0, 1],
    [1, 1, 2, 2, 1, 2, 0, 1, 0],
    [1, 1, 2, 2, 1, 2, 1, 2, 1],
    [1, 1, 2, 2, 1, 2, 2, 1, 1],
    [1, 2, 0, 0, 1, 0, 0, 2, 1],
    [1, 2, 0, 0, 1, 0, 2, 0, 1],
    [1, 2, 0, 0, 1, 1, 2, 2, 1],
    [1, 2, 0, 0, 1, 2, 0, 0, 1],
    [1, 2, 0, 0, 1, 2, 1, 2, 1],
    [1, 2, 0, 0, 1, 2, 2, 1, 1],
    [1, 2, 0, 0, 2, 2, 1, 1, 1],
    [1, 2, 0, 1, 0, 0, 1, 0, 2],
    [1, 2, 0, 1, 0, 0, 1, 2, 0],
    [1, 2, 0, 1, 0, 1, 1, 2, 2],
    [1, 2, 0, 1, 0, 2, 1, 0, 0],
    [1, 2, 0, 1, 0, 2, 1, 1, 2],
    [1, 2, 0, 1, 0, 2, 1, 2, 1],
    [1, 2, 0, 1, 1, 0, 1, 2, 2],
    [1, 2, 0, 1, 1, 0, 2, 2, 1],
    [1, 2, 0, 1, 1, 1, 0, 2, 2],
    [1, 2, 0, 1, 1, 1, 2, 0, 2],
    [1, 2, 0, 1, 1, 1, 2, 2, 0],
    [1, 2, 0, 1, 1, 2, 0, 2, 1],
    [1, 2, 0, 1, 1, 2, 1, 0, 2],
    [1, 2, 0, 1, 1, 2, 1, 2, 0],
    [1, 2, 0, 1, 1, 2, 2, 0, 1],
    [1, 2, 0, 1, 2, 0, 1, 0, 0],
    [1, 2, 0, 1, 2, 0, 1, 1, 2],
    [1, 2, 0, 1, 2, 1, 1, 0, 2],
    [1, 2, 0, 1, 2, 2, 1, 0, 1],
    [1, 2, 0, 1, 2, 2, 1, 1, 0],
    [1, 2, 0, 2, 0, 2, 1, 1, 1],
    [1, 2, 0, 2, 1, 0, 0, 0, 1],
    [1, 2, 0, 2, 1, 0, 1, 2, 1],
    [1, 2, 0, 2, 1, 0, 2, 1, 1],
    [1, 2, 0, 2, 1, 1, 0, 2, 1],
    [1, 2, 0, 2, 1, 1, 2, 0, 1],
    [1, 2, 0, 2, 1, 2, 0, 1, 1],
    [1, 2, 0, 2, 1, 2, 1, 0, 1],
    [1, 2, 0, 2, 2, 0, 1, 1, 1],
    [1, 2, 1, 0, 0, 1, 2, 2, 1],
    [1, 2, 1, 0, 1, 0, 1, 2, 2],
    [1, 2, 1, 0, 1, 0, 2, 2, 1],
    [1, 2, 1, 0, 1, 2, 0, 2, 1],
    [1, 2, 1, 0, 1, 2, 1, 0, 2],
    [1, 2, 1, 0, 1, 2, 1, 2, 0],
    [1, 2, 1, 0, 1, 2, 2, 0, 1],
    [1, 2, 1, 0, 2, 1, 2, 0, 1],
    [1, 2, 1, 1, 0, 0, 1, 2, 2],
    [1, 2, 1, 1, 0, 2, 1, 0, 2],
    [1, 2, 1, 1, 0, 2, 1, 2, 0],
    [1, 2, 1, 1, 1, 2, 1, 2, 2],
    [1, 2, 1, 1, 1, 2, 2, 2, 1],
    [1, 2, 1, 1, 2, 0, 1, 0, 2],
    [1, 2, 1, 1, 2, 2, 1, 0, 0],
    [1, 2, 1, 1, 2, 2, 1, 1, 2],
    [1, 2, 1, 2, 0, 1, 0, 2, 1],
    [1, 2, 1, 2, 0, 1, 2, 0, 1],
    [1, 2, 1, 2, 1, 0, 0, 2, 1],
    [1, 2, 1, 2, 1, 0, 1, 0, 2],
    [1, 2, 1, 2, 1, 0, 1, 2, 0],
    [1, 2, 1, 2, 1, 0, 2, 0, 1],
    [1, 2, 1, 2, 1, 1, 1, 2, 2],
    [1, 2, 1, 2, 1, 1, 2, 2, 1],
    [1, 2, 1, 2, 1, 2, 0, 0, 1],
    [1, 2, 1, 2, 1, 2, 1, 0, 0],
    [1, 2, 1, 2, 1, 2, 1, 1, 2],
    [1, 2, 1, 2, 1, 2, 1, 2, 1],
    [1, 2, 1, 2, 1, 2, 2, 1, 1],
    [1, 2, 1, 2, 2, 1, 0, 0, 1],
    [1, 2, 1, 2, 2, 1, 2, 1, 1],
    [1, 2, 2, 0, 0, 2, 1, 1, 1],
    [1, 2, 2, 0, 1, 0, 0, 0, 1],
    [1, 2, 2, 0, 1, 0, 1, 2, 1],
    [1, 2, 2, 0, 1, 0, 2, 1, 1],
    [1, 2, 2, 0, 1, 1, 0, 2, 1],
    [1, 2, 2, 0, 1, 1, 2, 0, 1],
    [1, 2, 2, 0, 1, 2, 0, 1, 1],
    [1, 2, 2, 0, 1, 2, 1, 0, 1],
    [1, 2, 2, 0, 2, 0, 1, 1, 1],
    [1, 2, 2, 1, 0, 0, 1, 0, 0],
    [1, 2, 2, 1, 0, 0, 1, 1, 2],
    [1, 2, 2, 1, 0, 0, 1, 2, 1],
    [1, 2, 2, 1, 0, 1, 1, 0, 2],
    [1, 2, 2, 1, 0, 1, 1, 2, 0],
    [1, 2, 2, 1, 0, 2, 1, 0, 1],
    [1, 2, 2, 1, 0, 2, 1, 1, 0],
    [1, 2, 2, 1, 1, 0, 0, 2, 1],
    [1, 2, 2, 1, 1, 0, 1, 0, 2],
    [1, 2, 2, 1, 1, 0, 1, 2, 0],
    [1, 2, 2, 1, 1, 0, 2, 0, 1],
    [1, 2, 2, 1, 1, 1, 0, 0, 2],
    [1, 2, 2, 1, 1, 1, 0, 2, 0],
    [1, 2, 2, 1, 1, 1, 1, 2, 2],
    [1, 2, 2, 1, 1, 1, 2, 0, 0],
    [1, 2, 2, 1, 1, 1, 2, 1, 2],
    [1, 2, 2, 1, 1, 1, 2, 2, 1],
    [1, 2, 2, 1, 1, 2, 0, 0, 1],
    [1, 2, 2, 1, 1, 2, 1, 0, 0],
    [1, 2, 2, 1, 1, 2, 1, 2, 1],
    [1, 2, 2, 1, 1, 2, 2, 1, 1],
    [1, 2, 2, 1, 2, 0, 1, 0, 1],
    [1, 2, 2, 1, 2, 0, 1, 1, 0],
    [1, 2, 2, 1, 2, 1, 1, 0, 0],
    [1, 2, 2, 1, 2, 1, 1, 1, 2],
    [1, 2, 2, 1, 2, 2, 1, 1, 1],
    [1, 2, 2, 2, 0, 0, 1, 1, 1],
    [1, 2, 2, 2, 1, 0, 0, 1, 1],
    [1, 2, 2, 2, 1, 0, 1, 0, 1],
    [1, 2, 2, 2, 1, 1, 0, 0, 1],
    [1, 2, 2, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 1, 1, 2, 1, 1],
    [1, 2, 2, 2, 1, 2, 1, 1, 1],
    [1, 2, 2, 2, 2, 1, 1, 1, 1],
    [2, 0, 0, 0, 0, 2, 1, 1, 1],
    [2, 0, 0, 0, 2, 0, 1, 1, 1],
    [2, 0, 0, 1, 1, 1, 0, 0, 2],
    [2, 0, 0, 1, 1, 1, 0, 2, 0],
    [2, 0, 0, 1, 1, 1, 1, 2, 2],
    [2, 0, 0, 1, 1, 1, 2, 0, 0],
    [2, 0, 0, 1, 1, 1, 2, 1, 2],
    [2, 0, 0, 1, 1, 1, 2, 2, 1],
    [2, 0, 0, 1, 2, 2, 1, 1, 1],
    [2, 0, 0, 2, 0, 0, 1, 1, 1],
    [2, 0, 0, 2, 1, 2, 1, 1, 1],
    [2, 0, 0, 2, 2, 1, 1, 1, 1],
    [2, 0, 1, 0, 0, 1, 0, 2, 1],
    [2, 0, 1, 0, 0, 1, 2, 0, 1],
    [2, 0, 1, 0, 1, 0, 1, 0, 2],
    [2, 0, 1, 0, 1, 0, 1, 2, 0],
    [2, 0, 1, 0, 1, 1, 1, 2, 2],
    [2, 0, 1, 0, 1, 1, 2, 2, 1],
    [2, 0, 1, 0, 1, 2, 1, 0, 0],
    [2, 0, 1, 0, 1, 2, 1, 1, 2],
    [2, 0, 1, 0, 1, 2, 1, 2, 1],
    [2, 0, 1, 0, 2, 1, 0, 0, 1],
    [2, 0, 1, 0, 2, 1, 1, 2, 1],
    [2, 0, 1, 0, 2, 1, 2, 1, 1],
    [2, 0, 1, 0, 2, 2, 1, 1, 1],
    [2, 0, 1, 1, 0, 1, 2, 2, 1],
    [2, 0, 1, 1, 1, 0, 1, 2, 2],
    [2, 0, 1, 1, 1, 1, 0, 2, 2],
    [2, 0, 1, 1, 1, 1, 2, 0, 2],
    [2, 0, 1, 1, 1, 1, 2, 2, 0],
    [2, 0, 1, 1, 1, 2, 1, 0, 2],
    [2, 0, 1, 1, 1, 2, 1, 2, 0],
    [2, 0, 1, 1, 2, 1, 0, 2, 1],
    [2, 0, 1, 1, 2, 1, 2, 0, 1],
    [2, 0, 1, 2, 0, 1, 0, 0, 1],
    [2, 0, 1, 2, 0, 1, 1, 2, 1],
    [2, 0, 1, 2, 0, 2, 1, 1, 1],
    [2, 0, 1, 2, 1, 0, 1, 0, 0],
    [2, 0, 1, 2, 1, 0, 1, 1, 2],
    [2, 0, 1, 2, 1, 0, 1, 2, 1],
    [2, 0, 1, 2, 1, 1, 0, 2, 1],
    [2, 0, 1, 2, 1, 1, 1, 0, 2],
    [2, 0, 1, 2, 1, 1, 1, 2, 0],
    [2, 0, 1, 2, 1, 2, 1, 0, 1],
    [2, 0, 1, 2, 1, 2, 1, 1, 0],
    [2, 0, 1, 2, 2, 0, 1, 1, 1],
    [2, 0, 1, 2, 2, 1, 0, 1, 1],
    [2, 0, 1, 2, 2, 1, 1, 0, 1],
    [2, 0, 2, 0, 0, 0, 1, 1, 1],
    [2, 0, 2, 0, 1, 2, 1, 1, 1],
    [2, 0, 2, 0, 2, 1, 1, 1, 1],
    [2, 0, 2, 1, 0, 2, 1, 1, 1],
    [2, 0, 2, 1, 1, 1, 0, 0, 0],
    [2, 0, 2, 1, 1, 1, 0, 1, 2],
    [2, 0, 2, 1, 1, 1, 0, 2, 1],
    [2, 0, 2, 1, 1, 1, 1, 0, 2],
    [2, 0, 2, 1, 1, 1, 1, 2, 0],
    [2, 0, 2, 1, 1, 1, 2, 0, 1],
    [2, 0, 2, 1, 1, 1, 2, 1, 0],
    [2, 0, 2, 1, 2, 0, 1, 1, 1],
    [2, 0, 2, 2, 0, 1, 1, 1, 1],
    [2, 0, 2, 2, 1, 0, 1, 1, 1],
    [2, 1, 0, 0, 1, 0, 0, 1, 2],
    [2, 1, 0, 0, 1, 0, 2, 1, 0],
    [2, 1, 0, 0, 1, 1, 2, 1, 2],
    [2, 1, 0, 0, 1, 2, 0, 1, 0],
    [2, 1, 0, 0, 1, 2, 1, 1, 2],
    [2, 1, 0, 0, 1, 2, 2, 1, 1],
    [2, 1, 0, 0, 2, 2, 1, 1, 1],
    [2, 1, 0, 1, 1, 0, 2, 1, 2],
    [2, 1, 0, 1, 1, 1, 0, 2, 2],
    [2, 1, 0, 1, 1, 1, 2, 0, 2],
    [2, 1, 0, 1, 1, 1, 2, 2, 0],
    [2, 1, 0, 1, 1, 2, 0, 1, 2],
    [2, 1, 0, 1, 1, 2, 2, 1, 0],
    [2, 1, 0, 2, 0, 2, 1, 1, 1],
    [2, 1, 0, 2, 1, 0, 0, 1, 0],
    [2, 1, 0, 2, 1, 0, 1, 1, 2],
    [2, 1, 0, 2, 1, 1, 0, 1, 2],
    [2, 1, 0, 2, 1, 2, 0, 1, 1],
    [2, 1, 0, 2, 1, 2, 1, 1, 0],
    [2, 1, 0, 2, 2, 0, 1, 1, 1],
    [2, 1, 1, 0, 0, 1, 2, 2, 1],
    [2, 1, 1, 0, 1, 0, 1, 2, 2],
    [2, 1, 1, 0, 1, 0, 2, 1, 2],
    [2, 1, 1, 0, 1, 2, 0, 1, 2],
    [2, 1, 1, 0, 1, 2, 1, 0, 2],
    [2, 1, 1, 0, 1, 2, 1, 2, 0],
    [2, 1, 1, 0, 1, 2, 2, 1, 0],
    [2, 1, 1, 0, 2, 1, 0, 2, 1],
    [2, 1, 1, 0, 2, 1, 2, 0, 1],
    [2, 1, 1, 1, 1, 2, 1, 2, 2],
    [2, 1, 1, 1, 1, 2, 2, 1, 2],
    [2, 1, 1, 1, 2, 1, 2, 2, 1],
    [2, 1, 1, 2, 0, 1, 0, 2, 1],
    [2, 1, 1, 2, 1, 0, 0, 1, 2],
    [2, 1, 1, 2, 1, 0, 1, 0, 2],
    [2, 1, 1, 2, 1, 0, 1, 2, 0],
    [2, 1, 1, 2, 1, 1, 1, 2, 2],
    [2, 1, 1, 2, 1, 2, 0, 1, 0],
    [2, 1, 1, 2, 1, 2, 1, 0, 0],
    [2, 1, 1, 2, 1, 2, 1, 1, 2],
    [2, 1, 1, 2, 1, 2, 1, 2, 1],
    [2, 1, 1, 2, 2, 1, 0, 0, 1],
    [2, 1, 1, 2, 2, 1, 1, 2, 1],
    [2, 1, 2, 0, 0, 2, 1, 1, 1],
    [2, 1, 2, 0, 1, 0, 0, 1, 0],
    [2, 1, 2, 0, 1, 0, 1, 1, 2],
    [2, 1, 2, 0, 1, 0, 2, 1, 1],
    [2, 1, 2, 0, 1, 1, 0, 1, 2],
    [2, 1, 2, 0, 1, 1, 2, 1, 0],
    [2, 1, 2, 0, 1, 2, 0, 1, 1],
    [2, 1, 2, 0, 1, 2, 1, 1, 0],
    [2, 1, 2, 0, 2, 0, 1, 1, 1],
    [2, 1, 2, 1, 1, 0, 0, 1, 2],
    [2, 1, 2, 1, 1, 0, 2, 1, 0],
    [2, 1, 2, 1, 1, 1, 0, 0, 2],
    [2, 1, 2, 1, 1, 1, 0, 2, 0],
    [2, 1, 2, 1, 1, 1, 1, 2, 2],
    [2, 1, 2, 1, 1, 1, 2, 0, 0],
    [2, 1, 2, 1, 1, 1, 2, 1, 2],
    [2, 1, 2, 1, 1, 1, 2, 2, 1],
    [2, 1, 2, 1, 1, 2, 0, 1, 0],
    [2, 1, 2, 1, 1, 2, 2, 1, 1],
    [2, 1, 2, 1, 2, 2, 1, 1, 1],
    [2, 1, 2, 2, 0, 0, 1, 1, 1],
    [2, 1, 2, 2, 1, 0, 0, 1, 1],
    [2, 1, 2, 2, 1, 0, 1, 1, 0],
    [2, 1, 2, 2, 1, 1, 0, 1, 0],
    [2, 1, 2, 2, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 1, 2, 1, 1, 1],
    [2, 1, 2, 2, 2, 1, 1, 1, 1],
    [2, 2, 0, 0, 0, 0, 1, 1, 1],
    [2, 2, 0, 0, 1, 2, 1, 1, 1],
    [2, 2, 0, 0, 2, 1, 1, 1, 1],
    [2, 2, 0, 1, 0, 2, 1, 1, 1],
    [2, 2, 0, 1, 1, 1, 0, 0, 0],
    [2, 2, 0, 1, 1, 1, 0, 1, 2],
    [2, 2, 0, 1, 1, 1, 0, 2, 1],
    [2, 2, 0, 1, 1, 1, 1, 0, 2],
    [2, 2, 0, 1, 1, 1, 1, 2, 0],
    [2, 2, 0, 1, 1, 1, 2, 0, 1],
    [2, 2, 0, 1, 1, 1, 2, 1, 0],
    [2, 2, 0, 1, 2, 0, 1, 1, 1],
    [2, 2, 0, 2, 0, 1, 1, 1, 1],
    [2, 2, 0, 2, 1, 0, 1, 1, 1],
    [2, 2, 1, 0, 0, 1, 0, 0, 1],
    [2, 2, 1, 0, 0, 1, 1, 2, 1],
    [2, 2, 1, 0, 0, 1, 2, 1, 1],
    [2, 2, 1, 0, 0, 2, 1, 1, 1],
    [2, 2, 1, 0, 1, 0, 1, 0, 0],
    [2, 2, 1, 0, 1, 0, 1, 1, 2],
    [2, 2, 1, 0, 1, 0, 1, 2, 1],
    [2, 2, 1, 0, 1, 1, 0, 2, 1],
    [2, 2, 1, 0, 1, 1, 1, 0, 2],
    [2, 2, 1, 0, 1, 1, 1, 2, 0],
    [2, 2, 1, 0, 1, 1, 2, 0, 1],
    [2, 2, 1, 0, 1, 2, 1, 0, 1],
    [2, 2, 1, 0, 1, 2, 1, 1, 0],
    [2, 2, 1, 0, 2, 0, 1, 1, 1],
    [2, 2, 1, 0, 2, 1, 0, 1, 1],
    [2, 2, 1, 0, 2, 1, 1, 0, 1],
    [2, 2, 1, 1, 0, 1, 0, 2, 1],
    [2, 2, 1, 1, 0, 1, 2, 0, 1],
    [2, 2, 1, 1, 1, 0, 1, 0, 2],
    [2, 2, 1, 1, 1, 0, 1, 2, 0],
    [2, 2, 1, 1, 1, 1, 0, 0, 2],
    [2, 2, 1, 1, 1, 1, 0, 2, 0],
    [2, 2, 1, 1, 1, 1, 1, 2, 2],
    [2, 2, 1, 1, 1, 1, 2, 0, 0],
    [2, 2, 1, 1, 1, 1, 2, 1, 2],
    [2, 2, 1, 1, 1, 1, 2, 2, 1],
    [2, 2, 1, 1, 1, 2, 1, 0, 0],
    [2, 2, 1, 1, 1, 2, 1, 1, 2],
    [2, 2, 1, 1, 1, 2, 1, 2, 1],
    [2, 2, 1, 1, 2, 1, 0, 0, 1],
    [2, 2, 1, 1, 2, 1, 2, 1, 1],
    [2, 2, 1, 1, 2, 2, 1, 1, 1],
    [2, 2, 1, 2, 0, 0, 1, 1, 1],
    [2, 2, 1, 2, 0, 1, 0, 1, 1],
    [2, 2, 1, 2, 0, 1, 1, 0, 1],
    [2, 2, 1, 2, 1, 0, 1, 0, 1],
    [2, 2, 1, 2, 1, 0, 1, 1, 0],
    [2, 2, 1, 2, 1, 1, 0, 0, 1],
    [2, 2, 1, 2, 1, 1, 1, 0, 0],
    [2, 2, 1, 2, 1, 1, 1, 1, 2],
    [2, 2, 1, 2, 1, 1, 1, 2, 1],
    [2, 2, 1, 2, 1, 2, 1, 1, 1],
    [2, 2, 1, 2, 2, 1, 1, 1, 1],
];

test("Wins for all game permutations when occupying rows, columns or diagonals .", () => {
    for (let i = 0; i < WinPermutations.length; i++) {
        const permutation = WinPermutations[i];
        expect(gameStatus(permutation, 1)).toBe(GameState.Player);
    }
});

/**
 * All draw permutations.
 */
const DrawPermutations = [
    [1, 1, 2, 2, 1, 1, 1, 2, 2],
    [1, 1, 2, 2, 2, 1, 1, 1, 2],
    [1, 1, 2, 2, 2, 1, 1, 2, 1],
    [1, 2, 1, 1, 1, 2, 2, 1, 2],
    [1, 2, 1, 1, 2, 1, 2, 1, 2],
    [1, 2, 1, 1, 2, 2, 2, 1, 1],
    [1, 2, 1, 2, 1, 1, 2, 1, 2],
    [1, 2, 1, 2, 2, 1, 1, 1, 2],
    [1, 2, 2, 2, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 2, 2, 2, 1],
    [2, 1, 1, 1, 2, 2, 1, 2, 1],
    [2, 1, 1, 1, 2, 2, 2, 1, 1],
    [2, 1, 2, 1, 1, 2, 1, 2, 1],
    [2, 1, 2, 1, 2, 1, 1, 2, 1],
    [2, 1, 2, 2, 1, 1, 1, 2, 1],
    [2, 2, 1, 1, 1, 2, 2, 1, 1]
];

test("Draws when all positions are taken without a winner.", () => {
    for (let i = 0; i < DrawPermutations.length; i++) {
        const permutation = DrawPermutations[i];
        expect(gameStatus(permutation, 1)).toBe(GameState.Draw);
    }
});
