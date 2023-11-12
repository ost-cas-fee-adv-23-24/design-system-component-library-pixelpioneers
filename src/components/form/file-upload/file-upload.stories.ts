import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from './file-upload';
import { IconCancel, IconCheckmark, IconUpload } from '../../../elements';

const meta: Meta<typeof FileUpload> = {
    title: 'Components/Form/FileUpload',
    component: FileUpload,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const DefaultFileUpload: Story = {
    name: 'FileUpload Default',
    args: {
        label: 'Datei hierhin ziehen...',
        labelFileSize: 'JPEG oder PNG, maximal 50 MB',
        labelButton: '... oder Datei auswählen',
        Icon: IconUpload,
        IconActionLeft: IconCancel,
        IconActionRight: IconCheckmark,
    },
};
