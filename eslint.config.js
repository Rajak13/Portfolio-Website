import { defineConfig } from "eslint-define-config"

export default defineConfig({
  extends: ["next/core-web-vitals"],
  rules: {
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "react/no-unescaped-entities": "off"
  }
})
