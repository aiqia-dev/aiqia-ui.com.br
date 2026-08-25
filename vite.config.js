import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Lê o package.json de forma segura
const pkg = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url), "utf-8")
);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      exclude: ["**/*.stories.tsx", "**/*.test.tsx", "**/*.mdx", "./docs/**/*", "**/*.fixture.tsx"],
    }),
    viteStaticCopy({
      targets: [
        {
          src: "lib/variables.css",
          dest: ".",
        },
      ],
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: "./lib/index.ts",
      formats: ["es"],
    },
    rollupOptions: {
      // ⚠️ Externaliza tanto dependencies quanto peerDependencies e sub-rotas
      external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
        /^@radix-ui\/.*/,
        /^lucide-react\/.*/,
        "react/jsx-runtime",
      ],
      output: {
        globals: { react: "React", "react-dom": "ReactDOM" },
        entryFileNames: "index.js",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./lib"),
      "cosmos": path.resolve(__dirname, "./cosmos"),
    },
  },
});