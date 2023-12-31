import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: [
        '../docs/**/*.mdx',
        '../*.mdx',
        '../src/**/*.mdx',
        '../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/preset-create-react-app',
        '@storybook/addon-interactions',
        '@storybook/addon-docs',
        '@storybook/addon-designs',
        '@storybook/addon-a11y',
        {
            name: '@storybook/addon-styling',
            options: {},
        },
    ],
    core: {
        disableTelemetry: true,
    },
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    staticDirs: ['../public', '../docs'],
};
export default config;
