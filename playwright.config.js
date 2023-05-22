// @ts-check
const { defineConfig, devices } = require("@playwright/test");

const SITE_URL = "http://127.0.0.1:5173";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
    testDir: "./tests/e2e",
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: "html",
    use: {
        baseURL: SITE_URL,
        trace: "on-first-retry",
        testIdAttribute: 'data-test'
    },
    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] },
        },

        {
            name: "firefox",
            use: { ...devices["Desktop Firefox"] },
        },

        {
            name: "webkit",
            use: { ...devices["Desktop Safari"] },
        },
    ],
    webServer: {
        command: "pnpm run serve",
        url: SITE_URL,
        reuseExistingServer: !process.env.CI,
    },
});
