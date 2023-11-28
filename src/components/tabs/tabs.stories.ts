import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './tabs';

const meta: Meta<typeof Tabs> = {
    title: 'Components/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=407-101&mode=design&t=72He1MwyRjB5KpiV-0',
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    args: {
        listTabs: [
            {
                label: '🐼 Deine Mumbles',
                onClick: () => {},
            },
            {
                label: 'Deine Likes',
                onClick: () => {},
            },
            {
                label: 'More Tabs',
                onClick: () => {},
            },
        ],
    },
};

export const TwoTabs: Story = {
    name: 'Two Tabs',
    args: {
        listTabs: [
            {
                label: '🐼 Deine Mumbles',
                onClick: () => {},
            },
            {
                label: 'Deine Likes',
                onClick: () => {},
            },
        ],
    },
};

export const SecondTabsIsActive: Story = {
    name: '2nd Tab is active',
    args: {
        listTabs: [
            {
                label: '🐼 Deine Mumbles',
                onClick: () => {},
            },
            {
                label: 'Deine Likes',
                onClick: () => {},
            },
        ],
        isActive: 1,
    },
};
