import { test, expect } from "@playwright/test";

/**
 * Clicking tiles in the following order will result in a win for Circle.
 */
const WinCircleClicks = [0, 3, 1, 4, 2];

/**
 * Clicking tiles in the following order will result in a win for Cross.
 */
const WinCrossClicks = [0, 3, 1, 4, 7, 5];

/**
 * Clicking tiles in the following order will result in a draw.
 */
const DrawClicks = [2, 0, 8, 6, 4, 5, 3, 1, 7];

test.beforeEach(async ({ page }) => {
    await page.goto("/");
});

test("The panel should be hidden by default.", async ({ page }) => {
    const panel = page.getByTestId("panel");
    await expect(panel).not.toHaveClass("show");
});

test("The panel should be visible on game win.", async ({ page }) => {
    const tiles = page.locator(".tile");
    const panel = page.getByTestId("panel");

    for (let i = 0; i < WinCircleClicks.length; i++) {
        await tiles.nth(WinCircleClicks[i]).click();
    }

    await expect(panel).toHaveClass("show");
});

test("The panel's title should be \"circle\", if circle player wins.", async ({ page }) => {
    const tiles = page.locator(".tile");
    const title = page.getByTestId("panel").locator("#title");

    for (let i = 0; i < WinCircleClicks.length; i++) {
        await tiles.nth(WinCircleClicks[i]).click();
    }

    await expect(title).toHaveText("circle");
});

test("The panel's title should be \"cross\", if cross player wins.", async ({ page }) => {
    const tiles = page.locator(".tile");
    const title = page.getByTestId("panel").locator("#title");

    for (let i = 0; i < WinCrossClicks.length; i++) {
        await tiles.nth(WinCrossClicks[i]).click();
    }

    await expect(title).toHaveText("cross");
});

test("The panel's pre title should be \"the winner is\" on win.", async ({ page }) => {
    const tiles = page.locator(".tile");
    const preTitle = page.getByTestId("panel").locator("#pre-title");

    for (let i = 0; i < WinCircleClicks.length; i++) {
        await tiles.nth(WinCircleClicks[i]).click();
    }

    await expect(preTitle).toHaveText("the winner is");
});

test("The panel should be visible on game draw.", async ({ page }) => {
    const tiles = page.locator(".tile");
    const panel = page.getByTestId("panel");

    for (let i = 0; i < DrawClicks.length; i++) {
        await tiles.nth(DrawClicks[i]).click();
    }

    await expect(panel).toHaveClass("show");
});

test("The panel's title should be \"draw\" on draw.", async ({ page }) => {
    const tiles = page.locator(".tile");
    const title = page.getByTestId("panel").locator("#title");

    for (let i = 0; i < DrawClicks.length; i++) {
        await tiles.nth(DrawClicks[i]).click();
    }

    await expect(title).toHaveText("draw");
});

test("The panel's pre title should be \"there's no winner\" on draw.", async ({ page }) => {
    const tiles = page.locator(".tile");
    const panel = page.getByTestId("panel");
    const preTitle = panel.locator("#pre-title");

    for (let i = 0; i < DrawClicks.length; i++) {
        await tiles.nth(DrawClicks[i]).click();
    }

    await expect(preTitle).toHaveText("there's no winner");
});

test("The panel's show class should be removed after clicking reset.", async ({ page }) => {
    const tiles = page.locator(".tile");
    const panel = page.getByTestId("panel");

    for (let i = 0; i < DrawClicks.length; i++) {
        await tiles.nth(DrawClicks[i]).click();
    }

    await panel.locator("#button").click();
    await expect(panel).not.toHaveClass("show");
});

test("The panel's reset button should restore all tiles to their default states.", async ({ page }) => {
    const tiles = page.locator(".tile");
    const panel = page.getByTestId("panel");

    for (let i = 0; i < WinCircleClicks.length; i++) {
        await tiles.nth(WinCircleClicks[i]).click();
    }

    await panel.locator("#button").click();

    for (let i = 0; i < 9; i++) {
        await expect(tiles.nth(i)).toHaveAttribute("data-state", "0");
    }
});
