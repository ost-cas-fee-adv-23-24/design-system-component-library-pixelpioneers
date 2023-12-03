import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './modal';
import { useEffect, useState } from 'react';
import { Button } from '../button/button';
import { ButtonSize } from '../button/types';
import { Variant } from '../../utlis/types';
import { IconMumble, IconUpload } from '../../elements';
import { WidthModal, ContentVariant } from './types';
import { MSettings } from './main/settings/m-settings';
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
        contentVariant: ContentVariant,
    },
    args: {
        buttonLabelPrimary: 'Save',
        buttonLabelSecondary: 'Cancel',
        isOpen: false,
        size: WidthModal.MEDIUM,
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
        size: WidthModal.SMALL,
        contentVariant: null,
        children: <div>Modal Content</div>,
    },
};

export const DefaultModalSmall: Story = {
    render: Template,
    args: {
        title: 'Einstellungen',
        size: WidthModal.SMALL,
        contentVariant: ContentVariant.SETTINGS,
        children: (
            <MSettings
                formClasses="[&_.wrap-input]:pb-s [&_.wrap-label]:pb-s"
                labelClasses="w-full inline-flex pt-l"
            />
        ),
    },
};

export const DefaultModalMedium: Story = {
    render: Template,
    args: {
        title: 'Einstellungen',
        size: WidthModal.MEDIUM,
        contentVariant: ContentVariant.SETTINGS,
        children: null,
    },
};

export const ModalFileUpload: Story = {
    render: Template,
    args: {
        title: 'Bild hochladen',
        size: WidthModal.MEDIUM,
        contentVariant: ContentVariant.FILE_UPLOAD,
        children: (
            <FileUpload
                label="Datei hierhin ziehen..."
                labelFileSize="JPEG oder PNG, maximal 50 MB"
                labelButton="... oder Datei auswählen"
                Icon={IconUpload}
                maxFileSizeUpload={2000}
            />
        ),
    },
};
