import { ComponentType, ReactNode } from 'react';
import { IconProps } from '../../elements/icons/types';

export interface MenuBarProps {
    children: ReactNode;
    bgColor?: string;
    iconClasses?: string;
    Icon: ComponentType<IconProps>;
}
