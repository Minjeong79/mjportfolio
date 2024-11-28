import globals from "globals";
import { configs as tsConfigs } from "@typescript-eslint/eslint-plugin";
import { configs as reactConfigs } from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
    rules: {
      ...tsConfigs.recommended.rules,
      ...reactConfigs.flat.recommended.rules,
    },
  },
];
