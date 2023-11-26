import { ComponentType } from 'react';
import { IconProps } from '../../elements';
import { Variant } from '../../utlis';
import { BaseButtonProps } from '../../base/base-button/types';

export type IconLinkProps = BaseButtonProps & {
    label: string;
    Icon: ComponentType<IconProps>;
    variant?: Variant;
};
