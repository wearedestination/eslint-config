import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import importPlugin from "eslint-plugin-import-x";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";

export default tseslint.config(
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      eslintPluginUnicorn.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        parser: tseslint.parser,
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "no-console": ["error", { allow: ["warn", "error", "info"] }],
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: false,
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            kebabCase: true,
            pascalCase: true,
          },
        },
      ],
      "unicorn/prevent-abbreviations": "off",
      "unicorn/prefer-global-this": "off",
    },
    settings: {
      "import-x/resolver-next": [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          // Match every tsconfig at the project root so path aliases declared
          // in solution-style setups (e.g. an `@/*` path in tsconfig.app.json
          // referenced from a root tsconfig.json) resolve without each project
          // needing its own resolver override.
          project: ["tsconfig.json", "tsconfig.*.json"],
          noWarnOnMultipleProjects: true,
        }),
      ],
    },
  },
  eslintConfigPrettier,
  {
    // Must come after eslintConfigPrettier, which disables `curly` outright: its
    // "multi-line"/"multi-or-nest" options judge braces by whether a statement
    // fits on one line, which is Prettier's decision, not the author's. That
    // can't conflict under "all" (Prettier never adds or removes braces), but a
    // static config can't tell which option we picked — so it turns the rule off
    // for everyone and documents re-enabling it here.
    rules: {
      curly: ["error", "all"],
    },
  },
);
