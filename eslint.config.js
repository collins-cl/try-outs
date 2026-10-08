// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    // Resolve the "@/" alias from jsconfig.json (the resolver defaults to tsconfig.json)
    settings: {
      "import/resolver": {
        typescript: { project: "./jsconfig.json" },
      },
    },
  },
  {
    ignores: ["dist/*"],
  },
]);
