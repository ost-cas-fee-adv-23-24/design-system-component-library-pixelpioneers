import type { Meta, StoryObj } from '@storybook/react';
import { Hint } from './hint';
import { HintVariant } from './types';

const meta: Meta<typeof Hint> = {
    title: 'Components/Form/Hint',
    component: Hint,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Hint>;

export const DefaultText: Story = {
    name: 'Hint Text',
    args: {
        children: 'This is a hint',
        status: HintVariant.HINT,
    },
};

export const DefaultError: Story = {
    name: 'Error Text',
    args: {
        children: 'This is an error or warn',
        status: HintVariant.ERROR,
    },
};
