import { ReactNode } from 'react';

export interface ModalProps {
    isOpen: boolean;
    title: string | null;
    onActionPrimary: () => void;
    onActionSecondary: () => void;
    buttonLabelPrimary: string;
    buttonLabelSecondary: string;
    children: ReactNode;
}
