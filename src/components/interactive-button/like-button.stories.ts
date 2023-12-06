import type { Meta, StoryObj } from '@storybook/react';
import { LikeButton } from './like-button';

const meta: Meta<typeof LikeButton> = {
    title: 'Components/Interactive Button/Like',
    component: LikeButton,
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=8862-2310&mode=design&t=72He1MwyRjB5KpiV-0',
        },
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
    },
    args: {
        disabled: false,
        name: 'Like-button',
        isLiked: false,
    },
};

export default meta;
type Story = StoryObj<typeof LikeButton>;

export const NoLikes: Story = {
    args: {
        amount: 0,
    },
};

export const Liked: Story = {
    args: {
        amount: 3,
        isLiked: true,
    },
};

export const HasLike: Story = {
    args: {
        amount: 1,
    },
};

export const HasLikes: Story = {
    args: {
        amount: 42,
    },
};
