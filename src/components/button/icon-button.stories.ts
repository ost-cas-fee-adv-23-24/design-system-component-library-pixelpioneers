import type { Meta, StoryObj } from '@storybook/react';
import { IconMumble } from '../../elements';
import { IconButton } from './icon-button';

const meta: Meta<typeof IconButton> = {
    title: 'Components/Button/IconButton',
    component: IconButton,
    parameters: {
        layout: 'centered',
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
