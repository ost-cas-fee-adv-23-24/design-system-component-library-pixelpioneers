import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        label: 'Button',
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        primary: true,
    },
};

export const Secondary: Story = {};

export const Large: Story = {
    args: {
        size: 'large',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
    },
};
