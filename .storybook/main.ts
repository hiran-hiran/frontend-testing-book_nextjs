// const path = require("path");

// module.exports = {
//   stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],

//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-interactions",
//     "@storybook/addon-a11y",
//     "storycap",
//     "@chromatic-com/storybook"
//   ],

//   framework: {
//     name: "@storybook/nextjs",
//     options: {}
//   },

//   features: {
//     interactionsDebugger: true,
//   },

//   staticDirs: ["../public"],

//   previewHead: (head) => `
//     ${head}
//     <link rel="stylesheet" href="styles/globals.css" />
//   `,

//   webpackFinal: async (config) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       "@": path.resolve(__dirname, "../src"),
//     };
//     return config;
//   },

//   docs: {
//     autodocs: true
//   }
// };
import { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storycap",
    "storybook-addon-next-router"
    // "@chromatic-com/storybook"
  ],
  previewHead: (head) => `
    ${head}
    <link rel="stylesheet" href="styles/globals.css" />
  `,
};

export default config;