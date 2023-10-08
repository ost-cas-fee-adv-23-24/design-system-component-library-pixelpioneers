import type { Meta, StoryObj } from '@storybook/react';
import { LinkButton } from './LinkButton';

const meta: Meta<typeof LinkButton> = {
    title: 'Components/LinkButton',
    component: LinkButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        label: 'LinkButton',
    },
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const PrimaryLink: Story = {
    args: {
        primary: true,
    },
};

export const SecondaryLink: Story = {};

export const LargeLink: Story = {
    args: {
        size: 'large',
    },
};

export const SmallLink: Story = {
    args: {
        size: 'small',
    },
};
