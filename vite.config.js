import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { peerDependencies } from "./package.json";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";

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
      external: Object.keys(peerDependencies),
      output: {
        globals: { react: "React", "react-dom": "ReactDOM" },
        entryFileNames: "index.js",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./lib"),
      "cosmos": path.resolve(__dirname, "./cosmos")
    },
  },
});
