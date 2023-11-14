import { ReactNode } from 'react';

export interface BaseButtonProps {
    onClick: () => void;
    children: ReactNode;
    name?: string;
    className?: string;
    fill?: boolean;
    disabled?: boolean;
}
