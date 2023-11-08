import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ButtonSize, ButtonVariant } from './types';
import { IconMumble } from '../../elements';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: ButtonSize,
        variant: ButtonVariant,
        onClick: { action: 'clicked' },
    },
    args: {
        label: 'Button',
        variant: ButtonVariant.PRIMARY,
        size: ButtonSize.M,
        Icon: IconMumble,
        fill: false,
        disabled: false,
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryM: Story = {
    args: {
        variant: ButtonVariant.PRIMARY,
    },
};

export const SecondaryM: Story = {
    args: {
        variant: ButtonVariant.SECONDARY,
    },
};

export const TertiaryM: Story = {
    args: {
        variant: ButtonVariant.TERTIARY,
    },
};

export const PrimaryL: Story = {
    args: {
        variant: ButtonVariant.PRIMARY,
        size: ButtonSize.L,
    },
};

export const SecondaryL: Story = {
    args: {
        variant: ButtonVariant.SECONDARY,
        size: ButtonSize.L,
    },
};

export const TertiaryL: Story = {
    args: {
        variant: ButtonVariant.TERTIARY,
        size: ButtonSize.L,
    },
};
