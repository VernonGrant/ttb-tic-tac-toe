export default {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "rules": {
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
}
