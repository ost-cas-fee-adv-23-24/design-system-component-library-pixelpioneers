import { ComponentType } from 'react';
import { IconProps } from '../../elements';
import { Variant } from '../../utlis';

export interface ButtonProps {
    Icon: ComponentType<IconProps>;
    variant?: Variant;
    onClick?: () => void;
    disabled?: boolean;
    size: ButtonSize;
    label?: string;
    fill?: boolean;
    name?: string;
}

export interface IconButtonProps {
    Icon: ComponentType<IconProps>;
    onClick?: () => void;
    disabled?: boolean;
    name?: string;
}

export enum ButtonSize {
    M = 'm',
    L = 'l',
}
