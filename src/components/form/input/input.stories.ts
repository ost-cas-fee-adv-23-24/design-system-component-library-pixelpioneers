import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import { InputType } from './types';
import { IconCancel, IconEye } from '../../../elements';
import { TextStatusVariant } from '../field-hint';

const meta: Meta<typeof Input> = {
    title: 'Components/Form/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: InputType,
    },
    args: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const DefaultText: Story = {
    name: 'Type Text with hint',
    args: {
        type: InputType.TEXT,
        value: 'Nico Lutz',
        name: 'name',
        placeholder: 'Please insert',
        label: 'Name',
        hintText: 'Bitte geben Sie Ihre Vorname ein',
        errorText: null,
        status: TextStatusVariant.HINT,
        hintName: 'name',
    },
};

export const DefaultTextWithHint: Story = {
    name: 'Type Text',
    args: {
        label: 'Name',
        type: InputType.TEXT,
        name: 'name',
        value: 'Nico Lutz',
        placeholder: 'Please insert',
        hintName: 'name',
        hintText: undefined,
        errorText: null,
        status: TextStatusVariant.HINT,
    },
};

export const DefaultTextInvalid: Story = {
    name: 'Type Invalid',
    args: {
        label: 'Invalid Name',
        type: InputType.TEXT,
        name: 'name',
        value: 'Nico',
        placeholder: 'Please insert',
        Icon: IconCancel,
        isOnChangeValid: 'Nico not allowed here',
        hintName: 'name',
        hintText: 'Bitte geben Sie Ihre Vornamen ein',
        errorText: 'Wrong text from server',
        status: TextStatusVariant.ERROR,
    },
};

export const DefaultTextValid: Story = {
    name: 'Type Valid',
    args: {
        label: 'Valid Name',
        type: InputType.TEXT,
        name: 'name',
        value: 'Nico',
        placeholder: 'Please insert',
        Icon: IconCancel,
        isOnChangeValid: null,
        hintName: 'name',
        hintText: 'Bitte geben Sie hier Ihren Vornamen ein',
        errorText: null,
        status: TextStatusVariant.HINT,
    },
};

export const DefaultPassword: Story = {
    name: 'Type Password',
    args: {
        label: 'Password',
        type: InputType.PASSWORD,
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
        type: InputType.EMAIL,
        name: 'email',
        value: 'nico.lutz@ost.ch',
        placeholder: 'Please insert',
    },
};
