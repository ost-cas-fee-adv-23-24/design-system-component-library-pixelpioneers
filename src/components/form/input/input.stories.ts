import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import { InputType } from './types';
import { IconCancel, IconEye } from '../../../elements';
import { HintVariant } from '../hint';

const meta: Meta<typeof Input> = {
    title: 'Components/Form/Input',
    component: Input,
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=8862-2761&mode=design&t=72He1MwyRjB5KpiV-0',
        },
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
        id: 'text-hint',
        type: InputType.TEXT,
        name: 'name',
        placeholder: 'Please insert',
        label: 'Name',
        hintText: 'Bitte geben Sie Ihren Vornamen ein',
        errorText: null,
        status: HintVariant.HINT,
        hintName: 'name',
    },
};

export const DefaultTextWithHint: Story = {
    name: 'Type Text',
    args: {
        id: 'text',
        label: 'Name',
        type: InputType.TEXT,
        name: 'name',
        placeholder: 'Please insert',
        hintName: 'name',
        hintText: undefined,
        errorText: null,
        status: HintVariant.HINT,
    },
};

export const DefaultTextInvalid: Story = {
    name: 'Type Invalid',
    args: {
        id: 'text-invalid',
        label: 'Invalid Name',
        type: InputType.TEXT,
        name: 'name',
        defaultValue: 'Nico',
        placeholder: 'Please insert',
        Icon: IconCancel,
        isOnChangeValid: 'Nico not allowed here',
        hintName: 'name',
        hintText: 'Bitte geben Sie Ihren Vornamen ein',
        errorText: 'Wrong text from server',
        status: HintVariant.ERROR,
    },
};

export const DefaultTextValid: Story = {
    name: 'Type Valid',
    args: {
        id: 'text-valid',
        label: 'Valid Name',
        type: InputType.TEXT,
        name: 'name',
        defaultValue: 'Nico',
        placeholder: 'Please insert',
        Icon: IconCancel,
        isOnChangeValid: null,
        hintName: 'name',
        hintText: 'Bitte geben Sie hier Ihren Vornamen ein',
        errorText: null,
        status: HintVariant.HINT,
    },
};

export const DefaultPassword: Story = {
    name: 'Type Password',
    args: {
        id: 'password',
        label: 'Password',
        type: InputType.PASSWORD,
        name: 'password',
        defaultValue: 'secret 🤐 🤫',
        Icon: IconEye,
        placeholder: 'Password is needed',
    },
};

export const DefaultEmail: Story = {
    name: 'Type Email',
    args: {
        id: 'email',
        label: 'E-Mail',
        type: InputType.EMAIL,
        name: 'email',
        defaultValue: 'nico.lutz@ost.ch',
        placeholder: 'Please insert',
    },
};
