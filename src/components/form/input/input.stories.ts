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
        name: 'name',
        placeholder: 'Please insert',
        label: 'Name',
        hintText: 'Bitte geben Sie Ihre Vorname ein',
        errorText: null,
        hintName: 'name',
    },
};

export const DefaultTextWithHint: Story = {
    name: 'Type Text',
    args: {
        label: 'Name',
        type: InputTypeProps.text,
        name: 'name',
        value: 'Nico Lutz',
        placeholder: 'Please insert',
        hintName: 'name',
        hintText: undefined,
        errorText: null,
    },
};

export const DefaultTextInvalid: Story = {
    name: 'Type Invalid',
    args: {
        label: 'Invalid Name',
        type: InputTypeProps.text,
        name: 'name',
        value: 'Nico',
        placeholder: 'Please insert',
        Icon: IconCancel,
        isOnChangeValid: 'Nico not allowed here',
        hintName: 'name',
        hintText: 'Bitte geben Sie Ihre Vornamen ein',
        errorText: 'Wrong text from server',
    },
};

export const DefaultTextValid: Story = {
    name: 'Type Valid',
    args: {
        label: 'Valid Name',
        type: InputTypeProps.text,
        name: 'name',
        value: 'Nico',
        placeholder: 'Please insert',
        Icon: IconCancel,
        isOnChangeValid: null,
        hintName: 'name',
        hintText: 'Bitte geben Sie hier Ihren Vornamen ein',
        errorText: null,
    },
};

export const DefaultPassword: Story = {
    name: 'Type Password',
    args: {
        label: 'Password',
        type: InputTypeProps.password,
        name: 'password',
        value: 'secret 🤐 🤫',
        Icon: IconEye,
        placeholder: 'Password is needed',
    },
};

export const DefaultEmail: Story = {
    name: 'Type Email',
    args: {
        label: 'E-Mail',
        type: InputTypeProps.email,
        name: 'email',
        value: 'nico.lutz@ost.ch',
        placeholder: 'Please insert',
    },
};
