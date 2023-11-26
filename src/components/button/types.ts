import { ButtonHTMLAttributes, ComponentType } from 'react';
import { IconProps } from '../../elements';
import { Variant } from '../../utlis';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    Icon: ComponentType<IconProps>;
    variant?: Variant;
    size: ButtonSize;
    label?: string;
    fill?: boolean;
}

export enum ButtonSize {
    M = 'm',
    L = 'l',
}
