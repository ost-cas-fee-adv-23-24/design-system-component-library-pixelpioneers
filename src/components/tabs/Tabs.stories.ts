import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'Components/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    args: {
        //listTabs: ['Tab 1', 'Tab 2', 'Tab 3'],
        listTabs: {
            Popular: [
                {
                    id: 1,
                    title: 'Is tech making coffee better or worse?',
                    date: 'Jan 7',
                    commentCount: 29,
                    shareCount: 16,
                },
                {
                    id: 2,
                    title: 'The most innovative things happening in coffee',
                    date: 'Mar 19',
                    commentCount: 24,
                    shareCount: 12,
                },
            ],
            Trending: [
                {
                    id: 1,
                    title: 'Ask Me Anything: 10 answers to your questions about coffee',
                    date: '2d ago',
                    commentCount: 9,
                    shareCount: 5,
                },
                {
                    id: 2,
                    title: "The worst advice we've ever heard about coffee",
                    date: '4d ago',
                    commentCount: 1,
                    shareCount: 2,
                },
            ],
        },
    },
};
