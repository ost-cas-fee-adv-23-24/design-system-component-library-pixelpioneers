import type { Meta, StoryObj } from '@storybook/react';
import { TextLink } from './text-link';

const meta: Meta<typeof TextLink> = {
    title: 'Components/Text Link',
    component: TextLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        label: 'Link Label',
        name: 'text-link',
        link: 'https://www.migros.ch',
    },
};

export default meta;
type Story = StoryObj<typeof TextLink>;

export const Default: Story = {};
