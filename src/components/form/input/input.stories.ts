import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { InputTypeProps } from './types';
import { IconEye } from '../../../elements';

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

export const Default: Story = {
    name: 'Default Input',
    args: {
        placeholder: 'Feel free to insert something',
    },
};

export const DefaultText: Story = {
    name: 'Type Text',
    args: {
        type: InputTypeProps.text,
        value: 'Nico Lutz',
        placeholder: 'Please insert',
    },
};

export const DefaultPassword: Story = {
    name: 'Type Password',
    args: {
        type: InputTypeProps.password,
        value: 'secret 🤐 🤫',
        Icon: IconEye,
    },
};

export const DefaultEmail: Story = {
    name: 'Type Email',
    args: {
        type: InputTypeProps.email,
        value: 'nico.lutz@ost.ch',
    },
};
