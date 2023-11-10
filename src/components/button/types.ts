import { ComponentType } from 'react';
import { IconProps } from '../../elements';
import { Variant } from '../../utlis';

export interface ButtonProps {
    Icon: ComponentType<IconProps>;
    onClick: () => void;
    variant?: Variant;
    disabled?: boolean;
    size: ButtonSize;
    label?: string;
    fill?: boolean;
    name?: string;
}

export type IconButtonProps = Omit<ButtonProps, 'variant' | 'label' | 'fill'>;

export enum ButtonSize {
    M = 'm',
    L = 'l',
}
