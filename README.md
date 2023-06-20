# Destination EsLint Config

Defines a set of rules used by [ESLint](https://eslint.org/) to enforce our JS/TS coding standards.

For the most part, this configuration uses [StandardJs](https://standardjs.com/) with a couple of tweaks to things
like indentation and semicolons.

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
yarn eslint assets/js
```

## License

Released under the [MIT license](LICENSE)
