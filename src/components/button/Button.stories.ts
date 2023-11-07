import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ButtonVariant } from './types';
import { IconMumble } from '../../elements';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: ['m', 'l'],
        variant: ButtonVariant,
        Icon: IconMumble,
    },
    args: {
        label: 'Button',
        variant: ButtonVariant.PRIMARY,
        size: 'm',
        Icon: IconMumble,
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: ButtonVariant.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        variant: ButtonVariant.SECONDARY,
    },
};

export const Tertiary: Story = {
    args: {
        variant: ButtonVariant.TERTIARY,
    },
};
