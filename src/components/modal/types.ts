import { ReactNode } from 'react';

export interface ModalProps {
    isOpen: boolean;
    title: string | null;
    size: WidthModal;
    onSubmit: () => void;
    onCancel: () => void;
    labelSubmit: string;
    labelCancel: string;
    children: ReactNode;
    className?: string;
}

export enum WidthModal {
    S = 's',
    M = 'm',
}
