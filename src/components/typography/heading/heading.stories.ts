import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './heading';
import { HeadingSize } from './types';

const meta: Meta<typeof Heading> = {
    title: 'Components/Typography/Heading',
    component: Heading,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: HeadingSize,
    },
    args: {
        className: 'text-secondary-600',
    },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Heading1: Story = {
    args: {
        size: HeadingSize.H1,
        text: 'Heading 1',
    },
};

export const Heading2: Story = {
    args: {
        size: HeadingSize.H2,
        text: 'Heading 2',
    },
};

export const Heading3: Story = {
    args: {
        size: HeadingSize.H3,
        text: 'Heading 3',
    },
};

export const Heading4: Story = {
    args: {
        size: HeadingSize.H4,
        text: 'Heading 4',
    },
};