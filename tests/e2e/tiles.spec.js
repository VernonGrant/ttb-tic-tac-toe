import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
    await page.goto("/");

    // Expect a title to match the following.
    await expect(page).toHaveTitle("TwoThreeBird | Tic Tac Toe");
});
