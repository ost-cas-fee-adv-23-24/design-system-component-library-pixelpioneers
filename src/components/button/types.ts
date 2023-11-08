import { ComponentType } from 'react';
import { IconProps } from '../../elements';

export interface ButtonProps {
    Icon: ComponentType<IconProps>;
    variant?: ButtonVariant;
    onClick?: () => void;
    disabled?: boolean;
    size: ButtonSize;
    label?: string;
    fill?: boolean;
}

export interface IconButtonProps {
    Icon: ComponentType<IconProps>;
    onClick?: () => void;
    disabled?: boolean;
}

export enum ButtonVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary',
}

export enum ButtonSize {
    M = 'm',
    L = 'l',
}
