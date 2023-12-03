import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from './file-upload';
import { IconUpload } from '../../../elements';

const meta: Meta<typeof FileUpload> = {
    title: 'Components/Form/FileUpload',
    component: FileUpload,
    parameters: {
        layout: 'padded',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=413-288&mode=design&t=72He1MwyRjB5KpiV-0',
        },
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
        maxFileSizeUpload: 52428800,
    },
};
