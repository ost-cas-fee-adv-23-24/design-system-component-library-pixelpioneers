import { ComponentType } from 'react';
import { IconProps } from '../../elements';
import { Variant } from '../../utlis';
import { BaseButtonProps } from '../../base/base-button/types';

export type IconLinkProps = Omit<BaseButtonProps, 'children' | 'ref'> & {
    label: string;
    Icon: ComponentType<IconProps>;
    variant?: Variant;
};
