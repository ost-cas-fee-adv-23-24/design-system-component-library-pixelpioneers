import { ComponentType } from 'react';
import { IconProps } from '../../elements';

export interface ButtonProps {
    Icon: ComponentType<IconProps>;
    variant?: ButtonVariant;
    onClick?: () => void;
    disabled?: boolean;
    size: 'm' | 'l';
    label?: string;
}

export enum ButtonVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary',
}
