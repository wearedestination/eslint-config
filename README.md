# Destination ESLint Config

Defines a set of rules used by [ESLint](https://eslint.org/) to enforce our JS/TS coding standards.

This configuration uses the [Airbnb style guide](https://github.com/airbnb/javascript) with a few tweaks.

## Installation

```sh
yarn add @destination/eslint-config eslint --dev
```

## Usage

Add the following to your project's ruleset e.g. in `package.json`:

```json
{
  "eslint": {
    "extends": "@destination/eslint-config"
  }
}
```

Run `eslint` as normal e.g.:

```sh
yarn eslint 'assets/**/*.{js,ts}'
```

## License

Released under the [MIT license](LICENSE)
