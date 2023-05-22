import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("/");
});

test("The default active indicator should be circle.", async ({ page }) => {
    const indicator = page.getByTestId("indicator");
    const circleIndicator = indicator.locator(".circle");

    await expect(circleIndicator).toHaveClass(/active/);
});

test("The indicator should change as the active player changes.", async ({ page }) => {
    const tiles = page.locator(".tile");
    const indicator = page.getByTestId("indicator");
    const circleIndicator = indicator.locator(".circle");
    const crossIndicator = indicator.locator(".cross");

    await expect(circleIndicator).toHaveClass(/active/);
    await tiles.nth(0).click();
    await expect(circleIndicator).not.toHaveClass(/active/);
    await expect(crossIndicator).toHaveClass(/active/);
    await tiles.nth(1).click();
    await expect(circleIndicator).toHaveClass(/active/);
    await expect(crossIndicator).not.toHaveClass(/active/);
});
