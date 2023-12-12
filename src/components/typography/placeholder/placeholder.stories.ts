import type { Meta, StoryObj } from '@storybook/react';
import { PlaceholderSize } from './types';
import { Placeholder } from './placeholder';

const meta: Meta<typeof Placeholder> = {
    title: 'Components/Typography/Placeholder',
    component: Placeholder,
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=437-1020&mode=design&t=72He1MwyRjB5KpiV-0',
        },
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
        children: 'Placeholder XL',
    },
};

export const PlaceholderL: Story = {
    args: {
        size: PlaceholderSize.L,
        children: 'Placeholder L',
    },
};

export const PlaceholderM: Story = {
    args: {
        size: PlaceholderSize.M,
        children: 'Placeholder M',
    },
};

export const PlaceholderS: Story = {
    args: {
        size: PlaceholderSize.S,
        children: 'Placeholder S',
    },
};
