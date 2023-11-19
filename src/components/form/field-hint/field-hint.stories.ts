import type { Meta, StoryObj } from '@storybook/react';
import { FieldHint } from './field-hint';

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
    },
};

export const DefaultError: Story = {
    name: 'Error  Hint Text',
    args: {
        errorText: 'This is an error or warn text',
    },
};
