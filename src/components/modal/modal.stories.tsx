import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './modal';
import { useEffect, useState } from 'react';
import { Button } from '../button/button';
import { ButtonSize } from '../button/types';
import { Variant } from '../../utlis/types';
import { IconMumble, IconUpload } from '../../elements';
import { WidthModal } from './types';
import { ModalSettingsTemplate } from './main/settings/modal-settings-template';
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
    },
};

export const DefaultModalSmall: Story = {
    render: Template,
    args: {
        title: 'Einstellungen',
        size: WidthModal.S,
        className: 'w-full flex-row gap-l',
        children: (
            <ModalSettingsTemplate
                formClasses="[&_.wrap-input]:pb-s [&_.wrap-label]:pb-s"
                labelClasses="w-full inline-flex pt-l"
                // initialFocusInputRef={initialFocusInputRef}
            />
        ),
    },
};

export const DefaultModalMedium: Story = {
    render: Template,
    args: {
        title: 'Einstellungen',
        size: WidthModal.M,
        className: 'w-full flex-row gap-l',
        children: null,
    },
};

export const ModalFileUpload: Story = {
    render: Template,
    args: {
        title: 'Bild hochladen',
        size: WidthModal.M,
        className: 'flex flex-col gap-s pb-s pt-l',
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
