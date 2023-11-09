import type { Meta, StoryObj } from '@storybook/react';
import { LabelSize } from './types';
import { Label } from './label';

const meta: Meta<typeof Label> = {
    title: 'Components/Typography/Label',
    component: Label,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: LabelSize,
    },
    args: {
        className: 'text-secondary-600',
    },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const LabelXL: Story = {
    args: {
        size: LabelSize.XL,
        text: 'Label XL',
    },
};

export const LabelL: Story = {
    args: {
        size: LabelSize.L,
        text: 'Label L',
    },
};

export const LabelM: Story = {
    args: {
        size: LabelSize.M,
        text: 'Label M',
    },
};

export const LabelS: Story = {
    args: {
        size: LabelSize.S,
        text: 'Label S',
    },
};
