import type { Meta, StoryObj } from '@storybook/react';
import { ParagraphSize } from './types';
import { Paragraph } from './paragraph';

const meta: Meta<typeof Paragraph> = {
    title: 'Components/Typography/Paragraph',
    component: Paragraph,
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=437-1020&mode=design&t=72He1MwyRjB5KpiV-0',
        },
    },
    tags: ['autodocs'],
    argTypes: {
        size: ParagraphSize,
    },
    args: {
        className: 'text-secondary-600',
    },
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const ParagraphL: Story = {
    args: {
        size: ParagraphSize.L,
        children:
            'Paragraph L – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio sed quis cumque error magni.',
    },
};

export const ParagraphM: Story = {
    args: {
        size: ParagraphSize.M,
        children:
            'Paragraph M – Quia aut et aut. Sunt et eligendi similique enim qui quo minus. Aut aut error velit voluptatum optio sed quis cumque error magni. Deserunt pariatur molestiae incidunt. Omnis deserunt ratione et recusandae quos excepturi ut deleniti ut repellat magni.',
    },
};
