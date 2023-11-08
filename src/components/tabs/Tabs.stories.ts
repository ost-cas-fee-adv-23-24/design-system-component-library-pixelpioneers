import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'Components/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onTabSwitch: { action: 'Tab has been changed to another tab' },
    },
    args: {},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    args: {
        listTabs: ['🐼 Deine Mumbles', 'Deine Likes', 'More Tabs'],
    },
};

export const TwoTabs: Story = {
    name: 'Two Tabs',
    args: {
        listTabs: ['🐼 Deine Mumbles', 'Deine Likes'],
    },
};

export const SecondTabsIsActive: Story = {
    name: '2nd Tab is active',
    args: {
        listTabs: ['🐼 Deine Mumbles', 'Deine Likes'],
        isActive: 1,
    },
};
