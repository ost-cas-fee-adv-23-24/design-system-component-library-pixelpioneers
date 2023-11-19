import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
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
    name: 'Type Text with hint',
    args: {
        type: InputTypeProps.text,
        value: 'Nico Lutz',
        placeholder: 'Please insert',
        label: 'Name',
        hintText: 'Bitte geben Sie Ihre Vorname ein',
        errorText: null,
        id: 12,
    },
};

export const DefaultTextWithHint: Story = {
    name: 'Type Text',
    args: {
        type: InputTypeProps.text,
        value: 'Nico Lutz',
        placeholder: 'Please insert',
        label: 'Name',
        errorText: null,
        hintText: undefined,
        id: 2,
    },
};

export const DefaultTextInvalid: Story = {
    name: 'Type Invalid',
    args: {
        type: InputTypeProps.text,
        value: 'Nico',
        placeholder: 'Please insert',
        Icon: IconCancel,
        isOnChangeValid: 'Nico not allowed here',
        label: 'Invalid Name',
        errorText: 'Wrong text from server',
        id: 234,
        hintText: 'Bitte geben Sie Ihre Vornamen ein',
    },
};

export const DefaultTextValid: Story = {
    name: 'Type Valid',
    args: {
        type: InputTypeProps.text,
        value: 'Nico',
        placeholder: 'Please insert',
        Icon: IconCancel,
        isOnChangeValid: null,
        label: 'Valid Name',
        errorText: null,
        id: 234,
        hintText: 'Bitte geben Sie hier Ihren Vornamen ein',
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
