import type { Meta, StoryObj } from '@storybook/react';
import { PlaceholderSize } from './types';
import { Placeholder } from './placeholder';

const meta: Meta<typeof Placeholder> = {
    title: 'Components/Typography/Placeholder',
    component: Placeholder,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: PlaceholderSize,
    },
    args: {
        className: 'text-secondary-300',
    },
};

export default meta;
type Story = StoryObj<typeof Placeholder>;

export const PlaceholderXL: Story = {
    args: {
        size: PlaceholderSize.XL,
        text: 'Placeholder XL',
    },
};

export const PlaceholderL: Story = {
    args: {
        size: PlaceholderSize.L,
        text: 'Placeholder L',
    },
};

export const PlaceholderM: Story = {
    args: {
        size: PlaceholderSize.M,
        text: 'Placeholder M',
    },
};

export const PlaceholderS: Story = {
    args: {
        size: PlaceholderSize.S,
        text: 'Placeholder S',
    },
};
