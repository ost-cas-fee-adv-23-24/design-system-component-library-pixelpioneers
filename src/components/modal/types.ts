import { ReactNode } from 'react';

export interface ModalProps {
    initialOpen: boolean;
    title: string | null;
    onActionPrimary: () => void;
    onActionSecondary: () => void;
    buttonLabelPrimary: string;
    buttonLabelSecondary: string;
    children: ReactNode;
}
