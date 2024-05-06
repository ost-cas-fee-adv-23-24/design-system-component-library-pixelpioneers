import { create } from '@storybook/theming/create';
import logoUrl from '../public/logo.svg';

export const pixelPioneersTheme = create({
    base: 'light',
    // Typography
    fontBase: '"Poppins", sans-serif',
    fontCode: 'monospace',

    // Brand
    brandTitle: 'PixelPioneers Storybook',
    brandUrl: 'https://www.ost.ch',
    brandImage: logoUrl,
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
