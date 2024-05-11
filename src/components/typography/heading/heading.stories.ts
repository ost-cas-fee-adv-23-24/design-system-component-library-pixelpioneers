import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './heading';
import { HeadingLevel } from './types';

const meta: Meta<typeof Heading> = {
    title: 'Components/Typography/Heading',
    component: Heading,
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=437-1020&mode=design&t=72He1MwyRjB5KpiV-0',
        },
    },
    tags: ['autodocs'],
    argTypes: {
        variant: HeadingLevel,
    },
    args: {
        className: 'text-secondary-600',
    },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Heading1: Story = {
    args: {
        variant: HeadingLevel.H1,
        children: 'Heading 1',
    },
};

export const Heading2: Story = {
    args: {
        variant: HeadingLevel.H2,
        children: 'Heading 2',
    },
};

export const Heading3: Story = {
    args: {
        variant: HeadingLevel.H3,
        children: 'Heading 3',
    },
};

export const Heading4: Story = {
    args: {
        variant: HeadingLevel.H4,
        children: 'Heading 4',
    },
};

export const Heading1Crazy: Story = {
    name: 'Heading in Gradient',
    args: {
        variant: HeadingLevel.H1,
        children: 'Heading as Crazy',
        className:
            'text-transparent bg-clip-text bg-gradient-to-r from-tertiary-500 to-primary-500',
    },
};
