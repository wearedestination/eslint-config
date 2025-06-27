# Destination ESLint Config

Defines a set of rules used by [ESLint](https://eslint.org/) to enforce our JS/TS coding standards.

Note that version 2 of this package uses the new [ESLint config format](https://eslint.org/docs/latest/use/configure/configuration-files-new)
and requires ESLint v9.0.0 or later.

## Installation

```sh
bun add @destination/eslint-config eslint --dev
```

## Usage

Your `eslint.config.js` file should look something like this:

```js
import destinationEsLintConfig from "@destination/eslint-config";

export default destinationEsLintConfig;
```

Or, if you need to specify additional configuration:

```js
import { defineConfig, globalIgnores } from "eslint/config";
import destinationEsLintConfigVue from "@destination/eslint-config-vue";

export default defineConfig([
  globalIgnores([
    "assets/some-ignored-file.ts",
    "assets/another-ignored-file.ts",
  ]),
  destinationEsLintConfigVue,
  {
    languageOptions: {
      globals: {
        google: "readonly",
      },
    },
  },
]);
```

Run `eslint` as normal e.g.:

```sh
bun run eslint 'assets/**/*.{js,ts}'
```

## License

Released under the [MIT license](LICENSE)
