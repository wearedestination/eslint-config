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
import { defineConfig } from "eslint/config";
import destinationEsLintConfig from "@destination/eslint-config";

export default defineConfig([
  destinationEsLintConfig,
  {
    files: ['assets/**/*.{ts,js}'],
    settings: {
      "import-x/resolver": {
        alias: {
          map: [
            ['@', './assets'],
          ],
        }
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
