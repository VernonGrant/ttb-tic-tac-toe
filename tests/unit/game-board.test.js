import { expect, test } from "vitest";
import { exampleMethod } from "../../src/game-board";

test("The example method should return 5", () => {
    expect(exampleMethod()).toBe(5);
});