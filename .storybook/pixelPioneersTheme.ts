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
    colorPrimary: '#3A10E5',
    colorSecondary: '#585C6D',

    // UI
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appBorderColor: '#585C6D',
    appBorderRadius: 4,

    // Text colors
    textColor: '#10162F',
    textInverseColor: '#ffffff',

    // Toolbar default and active colors
    barTextColor: '#9E9E9E',
    barSelectedColor: '#585C6D',
    barBg: '#ffffff',

    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#10162F',
    inputTextColor: '#10162F',
    inputBorderRadius: 2,
});
