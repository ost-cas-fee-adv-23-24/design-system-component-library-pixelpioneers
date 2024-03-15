import type { Meta, StoryObj } from '@storybook/react';
import { TextLink } from './text-link';

const meta: Meta<typeof TextLink> = {
    title: 'Components/Text Link',
    component: TextLink,
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=406-47&mode=design&t=72He1MwyRjB5KpiV-0',
        },
    },
    tags: ['autodocs'],
    args: {
        label: 'Link Label',
        link: 'https://www.migros.ch',
    },
};

export default meta;
type Story = StoryObj<typeof TextLink>;

export const Default: Story = {};
