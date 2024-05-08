import { ReactNode } from 'react';

export interface ModalProps {
    isOpen: boolean;
    title: string;
    size: ModalWidth;
    onSubmit: () => void;
    onCancel: () => void;
    labelSubmit: string;
    labelCancel: string;
    children: ReactNode;
    className?: string;
    submitButtonType?: 'submit' | 'reset' | 'button';
}

export enum ModalWidth {
    S = 's',
    M = 'm',
}
