import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { ButtonSize } from './types';
import { IconMumble } from '../../elements';
import { Variant } from '../../utlis';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=404-10&mode=design&t=72He1MwyRjB5KpiV-0',
        },
    },
    tags: ['autodocs'],
    argTypes: {
        size: ButtonSize,
        variant: Variant,
        onClick: { action: 'clicked' },
    },
    args: {
        label: 'Button',
        variant: Variant.PRIMARY,
        size: ButtonSize.M,
        Icon: IconMumble,
        fill: false,
        disabled: false,
        name: 'button',
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryM: Story = {
    args: {
        variant: Variant.PRIMARY,
    },
};

export const SecondaryM: Story = {
    args: {
        variant: Variant.SECONDARY,
    },
};

export const TertiaryM: Story = {
    args: {
        variant: Variant.TERTIARY,
    },
};

export const PrimaryL: Story = {
    args: {
        variant: Variant.PRIMARY,
        size: ButtonSize.L,
    },
};

export const SecondaryL: Story = {
    args: {
        variant: Variant.SECONDARY,
        size: ButtonSize.L,
    },
};

export const TertiaryL: Story = {
    args: {
        variant: Variant.TERTIARY,
        size: ButtonSize.L,
    },
};
