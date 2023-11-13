import { ComponentType } from 'react';
import { IconProps } from '../../elements';
import { Variant } from '../../utlis';

export interface IconLinkProps {
    label: string;
    Icon: ComponentType<IconProps>;
    onClick: () => void;
    disabled?: boolean;
    name?: string;
    variant?: Variant;
}
