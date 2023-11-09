import { ComponentType } from 'react';
import { IconProps } from '../../elements';
import { Variant } from '../../utlis';

export interface ToggleProps {
    label: string;
    variant: Variant;
    onClick: () => void;
    Icon?: ComponentType<IconProps>;
    isActive?: boolean;
    disabled?: boolean;
    name?: string;
    className?: string;
}
