module.exports = {
    "ignorePatterns": ["*.eslintrc.js", "*.config.js", "*example*"],
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "quotes": ["error", "double", { "avoidEscape": true }],
        "consistent-return": "error",
        "indent": ["warn", 4],
        "no-else-return": "warn",
        "semi": ["warn", "always"],
        "space-unary-ops": "error"
    },
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
};
