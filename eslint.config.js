import path from "node:path";
import { fileURLToPath } from "node:url";
import eslintPluginSvelte from "eslint-plugin-svelte";
import { includeIgnoreFile } from "@eslint/compat";
import * as svelteParser from "svelte-eslint-parser";
import * as typescriptParser from "@typescript-eslint/parser";

const testFilesGlob = ["**/__tests__/**/*.[jt]s", "**/?(*.)+(spec|test).[jt]s"];
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default [
  includeIgnoreFile(gitignorePath),
  ...eslintPluginSvelte.configs["flat/recommended"],
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: typescriptParser,
        project: "./tsconfig.app.json",
        extraFileExtensions: [".svelte"],
      },
    },
  },
];
