import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("/");
});

test("9 tiles should be available by default.", async ({ page }) => {
    const tiles = page.locator(".tile");
    await expect(tiles).toHaveCount(9);
});

test("All tiles should be neutral by default.", async ({ page }) => {
    const tiles = page.locator(".tile");

    for (let i = 0; i < 9; i++) {
        await expect(tiles.nth(i)).toHaveAttribute("data-state", "0");
    }
});

test("Tiles should be indexed from 0 to 8.", async ({ page }) => {
    const tiles = page.locator(".tile");

    for (let i = 0; i < 9; i++) {
        await expect(tiles.nth(i)).toHaveAttribute("data-index", i.toString());
    }
});

test("Clicking on a tile should change its state.", async ({ page }) => {
    const tiles = page.locator(".tile");

    await expect(tiles.nth(0)).toHaveAttribute("data-state", "0");
    await tiles.nth(0).click();
    await expect(tiles.nth(0)).not.toHaveAttribute("data-state", "0");
});

test("Clicking on a tile twice should do nothing.", async ({ page }) => {
    const tiles = page.locator(".tile");

    await expect(tiles.nth(0)).toHaveAttribute("data-state", "0");
    await tiles.nth(0).click();

    const attr = await tiles.nth(0).getAttribute("data-state");
    await tiles.nth(0).click();
    await expect(tiles.nth(0)).toHaveAttribute("data-state", attr);
});
