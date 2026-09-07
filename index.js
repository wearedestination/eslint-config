import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import importPlugin from "eslint-plugin-import-x";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";

// Rules eslint-config-prettier switches off but which are safe under the options
// we use, so we switch them back on. `curly` is disabled outright because its
// "multi-line"/"multi-or-nest" options judge braces by whether a statement fits on
// one line — Prettier's decision, not the author's. That can't conflict under
// "all" (Prettier never adds or removes braces), but a static config can't tell
// which option we picked, so it turns the rule off for everyone.
//
// Exported because these must be applied *after* eslintConfigPrettier. Any config
// extending this one that re-applies eslintConfigPrettier itself (as
// @destination/eslint-config-vue must, to disable eslint-plugin-vue's stylistic
// rules) has to re-apply these last as well, or it silently undoes them.
export const prettierSafeOverrides = {
  rules: {
    curly: ["error", "all"],
  },
};

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
      "unicorn/name-replacements": "off",
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
  prettierSafeOverrides,
);
