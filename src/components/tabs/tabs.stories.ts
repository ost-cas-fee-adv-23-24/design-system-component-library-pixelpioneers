import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './tabs';
import { action } from '@storybook/addon-actions';

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
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    args: {
        tabs: [
            {
                label: '🐼 Deine Mumbles',
                onClick: action('tab 1 clicked'),
            },
            {
                label: 'Deine Likes',
                onClick: action('tab 2 clicked'),
            },
            {
                label: 'More Tabs',
                onClick: action('tab 3 clicked'),
            },
        ],
    },
};

export const TwoTabs: Story = {
    name: 'Two Tabs',
    args: {
        tabs: [
            {
                label: 'First tab',
                onClick: action('tab 1 clicked'),
            },
            {
                label: 'Second tab',
                onClick: action('tab 2 clicked'),
            },
        ],
    },
};

export const SecondTabsIsActive: Story = {
    name: '2nd Tab is active',
    args: {
        tabs: [
            {
                label: 'not active',
                onClick: action('tab 1 clicked'),
            },
            {
                label: 'active',
                onClick: action('tab 2 clicked'),
            },
        ],
        activeTabIndex: 1,
    },
};

export const SecondTabsIsDisabled: Story = {
    name: '2nd Tab is disabled',
    args: {
        tabs: [
            {
                label: 'enabled',
                onClick: action('tab 1 clicked'),
            },
            {
                label: 'disabled',
                onClick: action('tab 2 clicked'),
                disabled: true,
            },
        ],
    },
};
