import { ComponentType } from 'react';
import { IconProps, IconSize } from '../../elements';
import { Variant } from '../../utlis';

export interface ButtonProps {
    Icon: ComponentType<IconProps>;
    onClick: () => void;
    variant?: Variant;
    disabled?: boolean;
    size: ButtonSize | IconSize;
    label?: string;
    fill?: boolean;
    name?: string;
    className?: string;
}

export enum ButtonSize {
    M = 'm',
    L = 'l',
}
