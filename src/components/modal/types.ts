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
}

export enum WidthModal {
    S = 's',
    M = 'm',
}
