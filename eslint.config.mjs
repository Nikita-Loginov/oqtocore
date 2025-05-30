import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.FlatConfig[]} */ export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser, parser: tseslint.parser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended.map((config) => ({ ...config })),
  { ...pluginReact.configs.flat.recommended },
];
