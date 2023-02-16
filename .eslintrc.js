module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'airbnb',
        'airbnb-typescript'
    ],
    "overrides": [
        {
            "files": ['*.ts', '*.tsx'],
            "extends": [
              'plugin:@typescript-eslint/recommended',
              'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
      
            "parserOptions": {
              "project": "./tsconfig.json",
            },
          },
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/function-component-definition": ["error", {namedComponents: "arrow-function"}],
        "arrow-body-style": ["error", "as-needed"]
    }
}
