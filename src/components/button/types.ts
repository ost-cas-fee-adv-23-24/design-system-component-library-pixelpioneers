import { ComponentType } from 'react';
import { IconProps } from '../../elements';
import { Variant } from '../../utlis';
import { BaseButtonProps } from '../../base/base-button/types';

export interface ButtonProps extends Omit<BaseButtonProps, 'children'> {
    Icon: ComponentType<IconProps>;
    variant?: Variant;
    size: ButtonSize;
    label?: string;
}

export enum ButtonSize {
    M = 'm',
    L = 'l',
}
