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
    name: 'Menu Bar',
    args: {
        bgColor: 'bg-primary-700',
        alignment: Alignment.LEFT,
    },
};

export const MenuBarRightAlignment: Story = {
    name: 'Menu Bar - Right Alignment',
    args: {
        bgColor: 'bg-primary-700',
        alignment: Alignment.RIGHT,
    },
};
