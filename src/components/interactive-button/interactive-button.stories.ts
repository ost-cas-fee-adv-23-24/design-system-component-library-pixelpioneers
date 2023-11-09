import type { Meta, StoryObj } from '@storybook/react';
import { IconMumble } from '../../elements';
import { Variant } from '../../utlis';
import { InteractiveButton } from './interactive-button';

const meta: Meta<typeof InteractiveButton> = {
    title: 'Components/Interactive Button/Default',
    component: InteractiveButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: Variant,
        onClick: { action: 'clicked' },
    },
    args: {
        label: 'Interaction!',
        variant: Variant.PRIMARY,
        Icon: IconMumble,
        disabled: false,
        name: 'interactive-button',
    },
};

export default meta;
type Story = StoryObj<typeof InteractiveButton>;

export const Primary: Story = {
    args: {
        variant: Variant.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        variant: Variant.SECONDARY,
    },
};

export const Tertiary: Story = {
    args: {
        variant: Variant.TERTIARY,
    },
};
