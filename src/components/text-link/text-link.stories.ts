import type { Meta, StoryObj } from '@storybook/react';
import { TextLink } from './text-link';

const meta: Meta<typeof TextLink> = {
    title: 'Components/Text Link',
    component: TextLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
    },
    args: {
        label: 'Link Label',
        disabled: false,
        name: 'text-link',
    },
};

export default meta;
type Story = StoryObj<typeof TextLink>;

export const Default: Story = {};
