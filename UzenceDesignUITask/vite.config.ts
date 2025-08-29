// /// <reference types="vitest/config" />
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vite.dev/config/
// import path from 'node:path';
// import { fileURLToPath } from 'node:url';
// import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
// import tailwindcss from '@tailwindcss/vite';
// const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// // More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
// export default defineConfig({
//   plugins: [react(),tailwindcss()],
//   test: {
//     projects: [{
//       extends: true,
//       plugins: [
//       // The plugin will run tests for the stories defined in your Storybook config
//       // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
//       storybookTest({
//         configDir: path.join(dirname, '.storybook')
//       })],
//       test: {
//         name: 'storybook',
//         browser: {
//           enabled: true,
//           headless: true,
//           provider: 'playwright',
//           instances: [{
//             browser: 'chromium'
//           }]
//         },
//         setupFiles: ['.storybook/vitest.setup.ts']
//       }
//     }]
//   }
// });

/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Node ESM-safe imports
import path from "path";
import { fileURLToPath } from "url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

// Compute __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(__dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: "playwright",
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});
