/** @type {import("eslint").Linter.Config} */
    module.exports = {
      extends: [
        "turbo",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "prettier"
      ],
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      env: {
        es2022: true,
        browser: true,
        node: true,
      },
      settings: {
        react: {
          version: "detect",
        },
      },
      rules: {
        "react/prop-types": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off"
      },
    };
