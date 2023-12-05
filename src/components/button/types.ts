import { ComponentType, LegacyRef } from 'react';
import { IconProps } from '../../elements';
import { Variant } from '../../utlis';
import { BaseButtonProps } from '../../base/base-button/types';

export type ButtonProps = Omit<BaseButtonProps, 'children'> & {
    Icon: ComponentType<IconProps>;
    variant?: Variant;
    size: ButtonSize;
    label?: string;
    ref?: LegacyRef<HTMLButtonElement | null>;
};

export enum ButtonSize {
    M = 'm',
    L = 'l',
}
