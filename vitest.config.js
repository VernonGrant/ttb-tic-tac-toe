import { defineConfig } from "vite";

export default defineConfig({
    test: {
        include: ["**/tests/unit/*.test.js"],
        coverage: {
            provider: "istanbul" // or 'c8'
        },
    }
});
