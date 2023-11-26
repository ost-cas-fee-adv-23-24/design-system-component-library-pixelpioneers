import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './modal';
import { useEffect, useState } from 'react';
import { Button } from '../button/button';
import { ButtonSize } from '../button/types';
import { Variant } from '../../utlis/types';
import { IconMumble } from '../../elements';
import { WidthModal } from './types';

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
                children={null}
            />
        </>
    );
};

export const DefaultModalSmall: Story = {
    render: Template,
    args: {
        title: 'Einstellungen',
        size: WidthModal.SMALL,
        children: <div>Modal Content</div>,
    },
};

export const DefaultModalMedium: Story = {
    render: Template,
    args: {
        title: 'Einstellungen',
        size: WidthModal.MEDIUM,
        children: <div>Modal Content</div>,
    },
};

export const ModalFileUpload: Story = {
    render: Template,
    args: {
        title: 'Bild hochladen',
        children: <div>Modal Content</div>,
    },
};
