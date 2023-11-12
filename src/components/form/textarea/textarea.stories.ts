import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
    title: 'Components/Form/Textarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        placeholder: 'Was gibt es Neues?',
    },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const DefaultText: Story = {
    name: 'Textarea Default',
    args: {
        label: 'Hey - what is up?',
    },
};

export const DefaultInitialTextValue: Story = {
    name: 'Textarea with any value',
    args: {
        value: 'Ich heisse André und wohne in Wädenswil',
    },
};

export const TextareaWithoutLabel: Story = {
    name: 'Textarea without label',
    args: {
        value: '',
    },
};
