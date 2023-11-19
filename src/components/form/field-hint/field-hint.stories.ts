import type { Meta, StoryObj } from '@storybook/react';
import { FieldHint } from './field-hint';
import { TextStatusVariant } from './types';

const meta: Meta<typeof FieldHint> = {
    title: 'Components/Form/FieldHint',
    component: FieldHint,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof FieldHint>;

export const DefaultText: Story = {
    name: 'Hint Text',
    args: {
        hintText: 'This is an hint',
        status: TextStatusVariant.HINT,
    },
};

export const DefaultError: Story = {
    name: 'Error Text',
    args: {
        errorText: 'This is an error or warn',
        status: TextStatusVariant.ERROR,
    },
};
