import type { Meta, StoryObj } from '@storybook/react';
import { CommentButton } from './comment-button';

const meta: Meta<typeof CommentButton> = {
    title: 'Components/Interactive Button/Comment',
    component: CommentButton,
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=8862-2310&mode=design&t=72He1MwyRjB5KpiV-0',
        },
    },
    tags: ['autodocs'],
    args: {
        disabled: false,
        name: 'comment-button',
    },
};

export default meta;
type Story = StoryObj<typeof CommentButton>;

export const NoComments: Story = {
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
