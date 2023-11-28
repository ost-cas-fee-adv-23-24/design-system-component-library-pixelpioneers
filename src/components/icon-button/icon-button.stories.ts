import type { Meta, StoryObj } from '@storybook/react';
import { IconMumble } from '../../elements';
import { IconButton } from './icon-button';

const meta: Meta<typeof IconButton> = {
    title: 'Components/Icon Button',
    component: IconButton,
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=404-10&mode=design&t=72He1MwyRjB5KpiV-0',
        },
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
    },
    args: {
        Icon: IconMumble,
        disabled: false,
        name: 'icon-button',
    },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
    name: 'Icon Button',
    args: {
        Icon: IconMumble,
    },
};
