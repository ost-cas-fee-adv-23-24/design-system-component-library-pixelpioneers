import type { Meta, StoryObj } from '@storybook/react';
import { CommentButton } from './comment-button';

const meta: Meta<typeof CommentButton> = {
    title: 'Components/Interactive Button/Comment',
    component: CommentButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        disabled: false,
        name: 'comment-button',
        label: { zero: 'Kommentieren', singular: 'Kommentar', plural: 'Kommentare' },
    },
};

export default meta;
type Story = StoryObj<typeof CommentButton>;

export const NoComment: Story = {
    args: {
        amount: 0,
    },
};

export const HasComment: Story = {
    args: {
        amount: 1,
    },
};

export const HasComments: Story = {
    args: {
        amount: 32,
    },
};
