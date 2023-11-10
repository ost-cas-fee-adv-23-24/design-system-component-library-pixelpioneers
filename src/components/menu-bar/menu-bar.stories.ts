import type { Meta, StoryObj } from '@storybook/react';
import { MenuBar } from './menu-bar';
import { IconLogoutAnimated, IconSettings } from '../../elements';

const meta: Meta<typeof MenuBar> = {
    title: 'Components/MenuBar',
    component: MenuBar,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof MenuBar>;

export const DefaultSettings: Story = {
    name: 'Menu Bar - Settings Icon',
    args: {
        bgColor: 'bg-violet-700',
        Icon: IconSettings,
        iconClasses:
            'hover:cursor-pointer fill-white group-hover:rotate-180 transition duration-1000 transform-none h-s w-s',
    },
};

export const DefaultLogout: Story = {
    name: 'Menu Bar - Logout Icon',
    args: {
        bgColor: 'bg-violet-700',
        Icon: IconLogoutAnimated,
        iconClasses:
            'hover:cursor-pointer fill-white transition duration-1000 transform-none h-s w-s',
    },
};
