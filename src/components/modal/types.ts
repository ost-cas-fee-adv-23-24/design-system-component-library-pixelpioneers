import { ReactNode } from 'react';

export interface ModalProps {
    isOpen: boolean;
    title: string | null;
    size: WidthModal;
    contentVariant?: ContentVariant | null;
    onActionPrimary: () => void;
    onActionSecondary: () => void;
    buttonLabelPrimary: string;
    buttonLabelSecondary: string;
    children: ReactNode | ReactNode[];
}

export enum WidthModal {
    SMALL = 'md:max-w-[400px]',
    MEDIUM = 'md:max-w-[600px]',
}

export enum ContentVariant {
    SETTINGS = 'settings',
    FILE_UPLOAD = 'file_upload',
}
