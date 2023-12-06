import { ReactNode } from 'react';

export interface ModalProps {
    isOpen: boolean;
    title: string | null;
    size: WidthModal;
    onActionPrimary: () => void;
    onActionSecondary: () => void;
    buttonLabelPrimary: string;
    buttonLabelSecondary: string;
    children: ReactNode | ReactNode[];
    className?: string;
    variant?: ContentVariant;
    initial?: InitialElement;
}

export enum WidthModal {
    S = 's',
    M = 'm',
}

export enum ContentVariant {
    SETTINGS = 'settings',
    UPLOAD = 'upload',
}

export enum InitialElement {
    BUTTON = 'button',
    INPUT = 'input',
}
