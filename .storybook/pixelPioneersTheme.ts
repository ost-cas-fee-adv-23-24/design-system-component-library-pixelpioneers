import { create } from '@storybook/theming/create';

export const pixelPioneersTheme = create({
    base: 'light',
    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Brand
    brandTitle: 'PixelPioneers Storybook',
    brandUrl: 'https://www.ost.ch',
    brandImage:
        'https://raw.githubusercontent.com/ost-cas-fee-adv-23-24/design-system-component-library-pixelpioneers/b235727143d51be01dbcbfa84f2e17abf989801a/src/assets/pixelpioneers.png',
    brandTarget: '_blank',

    // Color
    colorPrimary: '#7C3AED',
    colorSecondary: '#475569',

    // UI
    appBg: '#DDD6FE',
    appContentBg: '#FFFFFF',
    appBorderColor: '#7C3AED',
    appBorderRadius: 2,

    // Text colors
    textColor: '#7C3AED',
    textInverseColor: '#FFFFFF',

    // Toolbar default and active colors
    barBg: '#C4B5FD',
    barTextColor: '#7C3AED',
    barSelectedColor: '#7C3AED',

    // Form colors
    inputBg: '#FFFFFF',
    inputBorder: '#7C3AED',
    inputTextColor: '#7C3AED',
    inputBorderRadius: 1,
});
