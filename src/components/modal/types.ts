import { ReactNode } from 'react';

export interface ModalProps {
    isOpen: boolean;
    title: string | null;
    size: WidthModal;
    onActionPrimary: () => void;
    onActionSecondary: () => void;
    buttonLabelPrimary: string;
    buttonLabelSecondary: string;
    children: ReactNode;
}

export enum WidthModal {
    SMALL = 'md:max-w-[400px]',
    MEDIUM = 'md:max-w-[600px]',
}
