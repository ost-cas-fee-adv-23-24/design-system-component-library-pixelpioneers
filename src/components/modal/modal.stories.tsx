import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './modal';
import { useEffect, useState } from 'react';
import { Button } from '../button/button';
import { ButtonSize } from '../button/types';
import { Variant } from '../../utlis/types';
import { IconMumble, IconUpload } from '../../elements';
import { ContentVariant, InitialElement, WidthModal } from './types';
import { FileUpload } from '../form/file-upload/file-upload';

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: WidthModal,
    },
    args: {
        buttonLabelPrimary: 'Save',
        buttonLabelSecondary: 'Cancel',
        isOpen: false,
        size: WidthModal.M,
        title: 'Einstellungen',
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const Template: Story['render'] = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(args.isOpen);
    }, [args.isOpen]);

    return (
        <>
            <Button
                size={ButtonSize.M}
                variant={Variant.PRIMARY}
                onClick={() => setIsOpen(!isOpen)}
                label="Show the Modal"
                Icon={IconMumble}
            />
            <Modal
                {...args}
                onActionPrimary={() => setIsOpen(false)}
                onActionSecondary={() => setIsOpen(false)}
                isOpen={isOpen}
            />
        </>
    );
};

export const Default: Story = {
    render: Template,
    args: {
        title: 'Einstellungen',
        size: WidthModal.S,
        className: 'w-full flex-row gap-l',
        children: <div>Modal Content</div>,
        variant: ContentVariant.SETTINGS,
    },
};

export const DefaultModalSmallInitialInput: Story = {
    render: Template,
    args: {
        title: 'Initial Input',
        size: WidthModal.S,
        className: 'w-full flex-row gap-l',
        variant: ContentVariant.SETTINGS,
        initial: InitialElement.INPUT,
    },
};

export const DefaultModalSmallInitialButton: Story = {
    render: Template,
    args: {
        title: 'Initial Button',
        size: WidthModal.S,
        className: 'w-full flex-row gap-l',
        variant: ContentVariant.SETTINGS,
        initial: InitialElement.BUTTON,
    },
};

export const DefaultModalMedium: Story = {
    render: Template,
    args: {
        title: 'Einstellungen',
        size: WidthModal.M,
        className: 'w-full flex-row gap-l',
        children: null,
        variant: ContentVariant.SETTINGS,
    },
};

export const ModalFileUpload: Story = {
    render: Template,
    args: {
        title: 'Bild hochladen',
        size: WidthModal.M,
        children: (
            <FileUpload
                label="Datei hierhin ziehen..."
                labelFileSize="JPEG oder PNG, maximal 50 MB"
                labelButton="... oder Datei auswählen"
                Icon={IconUpload}
                maxFileSizeUpload={2000}
            />
        ),
        variant: ContentVariant.UPLOAD,
    },
};
