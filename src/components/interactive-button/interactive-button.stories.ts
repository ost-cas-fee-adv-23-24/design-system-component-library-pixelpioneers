import type { Meta, StoryObj } from '@storybook/react';
import { IconMumble } from '../../elements';
import { InteractiveButton } from './interactive-button';

const meta: Meta<typeof InteractiveButton> = {
    title: 'Components/Interactive Button/Default',
    component: InteractiveButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
    },
    args: {
        label: 'Interaction!',
        Icon: IconMumble,
        disabled: false,
        name: 'interactive-button',
    },
};

export default meta;
type Story = StoryObj<typeof InteractiveButton>;

export const Default: Story = {};
