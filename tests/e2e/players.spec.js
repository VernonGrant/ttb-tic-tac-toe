import { test, expect } from "@playwright/test";
import { Players } from "../../src/players";

test.beforeEach(async ({ page }) => {
    await page.goto("/");
});

test("The default player should be Circle.", async ({ page }) => {
    const tiles =  await page.locator(".tile");

    await expect(tiles.nth(0)).toHaveAttribute("data-state", "0");
    await tiles.nth(0).click();
    await expect(tiles.nth(0)).toHaveAttribute("data-state", Players.Circle.toString());
});

test("The second player should be Cross.", async ({ page }) => {
    const tiles =  await page.locator(".tile");

    await expect(tiles.nth(0)).toHaveAttribute("data-state", "0");
    await tiles.nth(0).click();
    await expect(tiles.nth(0)).toHaveAttribute("data-state", Players.Circle.toString());

    await tiles.nth(1).click();
    await expect(tiles.nth(1)).toHaveAttribute("data-state", Players.Cross.toString());
});

test("The active player should cycle between rounds.", async ({ page }) => {
    const tiles =  await page.locator(".tile");

    await tiles.nth(0).click();
    await expect(tiles.nth(0)).toHaveAttribute("data-state", Players.Circle.toString());

    await tiles.nth(1).click();
    await expect(tiles.nth(1)).toHaveAttribute("data-state", Players.Cross.toString());

    await tiles.nth(2).click();
    await expect(tiles.nth(2)).toHaveAttribute("data-state", Players.Circle.toString());

    await tiles.nth(3).click();
    await expect(tiles.nth(3)).toHaveAttribute("data-state", Players.Cross.toString());
});
