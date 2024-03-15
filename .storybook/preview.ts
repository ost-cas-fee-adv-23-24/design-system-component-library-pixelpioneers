import '../src/index.css';
import './storybook.css';

import type { Preview } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-styling';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        a11y: {
            element: '#storybook-root',
            config: {
                rules: [
                    {
                        id: 'aria-hidden-focus',
                        selector: 'body *:not([data-a11y-ignore="aria-hidden-focus"])',
                    },
                    // Disable color contrast check, since design colors have not enough contrast
                    {
                        id: 'color-contrast',
                        enabled: false,
                    },
                ],
            },
            // Axe's options parameter
            options: {},
            // Optional flag to prevent the automatic check
            //manual: true,
        },
    },
};

export const decorators = [
    withThemeByDataAttribute({
        themes: {
            light: 'light',
            dark: 'dark',
        },
        defaultTheme: 'light',
        attributeName: 'data-mode',
    }),
];

export default preview;
