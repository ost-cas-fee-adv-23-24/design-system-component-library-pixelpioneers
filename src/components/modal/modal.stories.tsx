import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './modal';
import { useEffect, useState } from 'react';
import { Button } from '../button/button';
import { ButtonSize } from '../button/types';
import { Variant } from '../../utlis/types';
import { IconEye, IconMumble, IconUpload } from '../../elements';
import { WidthModal } from './types';
import { FileUpload } from '../form/file-upload/file-upload';
import { Label, LabelSize } from '../typography';
import { Input, InputType } from '../form';
import { ModalSettingsTemplate } from './main/settings/modal-settings-template';

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
        labelSubmit: 'Save',
        labelCancel: 'Cancel',
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
                onSubmit={() => setIsOpen(false)}
                onCancel={() => setIsOpen(false)}
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
            />
        )
    },
};

export const DefaultModalMedium: Story = {
    render: Template,
    args: {
        title: 'Einstellungen',
        size: WidthModal.M,
        className: 'w-full flex-row gap-l',
        children: <div>Modal Content</div>,
    },
};

export const ModalFileUpload: Story = {
    render: Template,
    args: {
        title: 'Bild hochladen',
        size: WidthModal.M,
        labelCancel: 'Abbrechen',
        labelSubmit: 'Speichern',
        children: (
            <FileUpload
                label="Datei hierhin ziehen ..."
                labelFileSize="JPEG oder PNG, maximal 50 MB"
                labelButton="... oder Datei auswählen"
                Icon={IconUpload}
                maxFileSizeUpload={2000}
            />
        ),
    },
};

export const ModalSettings: Story = {
    render: Template,
    args: {
        title: 'Einstellungen',
        size: WidthModal.M,
        labelCancel: 'Abbrechen',
        labelSubmit: 'Speichern',
        children: (
            <form className="mb-l flex flex-col gap-l">
                <section className="flex flex-col gap-s">
                    <Label size={LabelSize.XL} className="inline-flex w-full">
                        Persönliche Einstellungen
                    </Label>
                    <Input
                        onChange={() => {}}
                        placeholder="Name Vorname"
                        label="Name Vorname"
                        type={InputType.TEXT}
                        name="nameAndSurname"
                    />
                    <Input
                        onChange={() => {}}
                        placeholder="E-Mail Adresse"
                        label="E-Mail Adresse"
                        type={InputType.EMAIL}
                        name="email"
                    />
                    <Input
                        onChange={() => {}}
                        placeholder="Ortschaft"
                        label="Ortschaft"
                        type={InputType.TEXT}
                        name="city"
                    />
                    <Input
                        onChange={() => {}}
                        placeholder="Biografie"
                        label="Biografie"
                        type={InputType.TEXT}
                        name="biography"
                    />
                </section>

                <section className="flex flex-col gap-s">
                    <Label size={LabelSize.XL} className="inline-flex w-full">
                        Passwort ändern
                    </Label>
                    <Input
                        onChange={() => {}}
                        placeholder="Altes Passwort"
                        Icon={IconEye}
                        label="Altes Passwort"
                        type={InputType.PASSWORD}
                        name="oldPassword"
                    />
                    <Input
                        onChange={() => {}}
                        placeholder="Neues Passwort"
                        Icon={IconEye}
                        label="Neues Passwort"
                        type={InputType.PASSWORD}
                        name="newPassword"
                    />
                </section>
            </form>
        ),
    },
};
