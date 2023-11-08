import type { Meta, StoryObj } from '@storybook/react';
import { IconMumble } from '../../elements';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
    title: 'Components/Button',
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
