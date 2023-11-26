import type { Meta, StoryObj } from '@storybook/react';
import { MFileUpload } from './m-file-upload';

const meta: Meta<typeof MFileUpload> = {
    title: 'Components/Modal/Content/FileUpload',
    component: MFileUpload,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof MFileUpload>;

export const Default: Story = {
    name: 'File-Upload',
    args: {
        children: [],
    },
};
