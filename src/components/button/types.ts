export interface ButtonProps {
    color?: ButtonColor;
    size?: 'm' | 'l';
    label: string;
    onClick?: () => void;
    icon?: string;
    disabled?: boolean;
}

export enum ButtonColor {
    SLATE = 'slate',
    VIOLET = 'violet',
    GRADIENT = 'gradient',
}
