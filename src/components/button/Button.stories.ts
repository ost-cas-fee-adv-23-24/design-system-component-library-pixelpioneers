import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ButtonColor } from './types';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: ['m', 'l'],
        color: ButtonColor,
    },
    args: {
        label: 'Button',
        color: ButtonColor.VIOLET,
        size: 'm',
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        color: ButtonColor.GRADIENT,
    },
};
