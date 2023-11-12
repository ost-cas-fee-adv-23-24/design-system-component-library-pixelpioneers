import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Snput';
import { InputTypeProps } from './types';
import { IconCancel, IconEye } from '../../../elements';

const meta: Meta<typeof Input> = {
    title: 'Components/Form/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: InputTypeProps,
    },
    args: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const DefaultText: Story = {
    name: 'Type Text',
    args: {
        type: InputTypeProps.text,
        value: 'Nico Lutz',
        placeholder: 'Please insert',
        label: 'Name',
    },
};

export const DefaultTextInvalid: Story = {
    name: 'Type Invalid',
    args: {
        type: InputTypeProps.text,
        value: 'Nico',
        placeholder: 'Please insert',
        Icon: IconCancel,
        isValid: 'Nico not allowed here',
        label: 'Invalid Name',
    },
};

export const DefaultPassword: Story = {
    name: 'Type Password',
    args: {
        type: InputTypeProps.password,
        value: 'secret 🤐 🤫',
        Icon: IconEye,
        placeholder: 'Password is needed',
        label: 'Password',
    },
};

export const DefaultEmail: Story = {
    name: 'Type Email',
    args: {
        type: InputTypeProps.email,
        value: 'nico.lutz@ost.ch',
        placeholder: 'Please insert',
        label: 'E-Mail',
    },
};
