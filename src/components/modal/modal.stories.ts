import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './modal';

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        buttonLabelPrimary: 'Save',
        buttonLabelSecondary: 'Cancel',
        initialOpen: true,
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    name: 'Einstellungen',
    args: {
        title: 'Einstellungen',
        children: [],
    },
};

export const ModalFileUpload: Story = {
    name: 'Bild hochladen',
    args: {
        title: 'Bild hochladen',
        children: [],
    },
};
