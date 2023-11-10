import type { Meta, StoryObj } from '@storybook/react';
import { MenuBarButton } from './menu-bar-button';

const meta: Meta<typeof MenuBarButton> = {
    title: 'Components/MenuBarButton',
    component: MenuBarButton,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof MenuBarButton>;

export const DefaultSettings: Story = {
    name: 'Menu Bar Button',
    args: {
        bgColor: 'bg-violet-600',
        children: null,
    },
};
