import type { Meta, StoryObj } from '@storybook/react';
import { MenuBar } from './menu-bar';
import { Alignment } from './types';

const meta: Meta<typeof MenuBar> = {
    title: 'Components/MenuBar',
    component: MenuBar,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        alignment: Alignment,
        onClick: { action: 'clicked' },
    },
    args: {
        alignment: Alignment.LEFT,
    },
};

export default meta;
type Story = StoryObj<typeof MenuBar>;

export const DefaultMenuBar: Story = {
    name: 'MenuBar',
    args: {
        navBgColor: 'bg-primary-700',
        className: 'bg-primary-600',
        borderActive: true,
    },
};

export const MenuBarRightAlignment: Story = {
    name: 'MenuBar - Right Alignment',
    args: {
        navBgColor: 'bg-primary-700',
        alignment: Alignment.RIGHT,
        className: 'bg-primary-600',
        borderActive: true,
    },
};

export const MenuBarBorderIconDeactive: Story = {
    name: 'MenuBar - Without Border of Icon',
    args: {
        navBgColor: 'bg-primary-700',
        alignment: Alignment.RIGHT,
        borderActive: false,
    },
};
