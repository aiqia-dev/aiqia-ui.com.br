import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../lib/**/*.mdx",
    "../docs/**/*.mdx",
    "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../docs/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-styling-webpack",
    "@storybook/addon-themes",
    "@storybook/addon-docs"
  ],
  framework: '@storybook/react-vite'
};
export default config;
