import { type IconSize } from '../../elements/icons/types';

export interface AvatarProps {
    src: string;
    alt: string;
    className?: string;
    imageSize: ImageSize;
    editMode?: boolean;
    iconEditModeSize: IconSize;
    ringVariant?: string;
    onClick?: () => void;
}

export enum ImageSize {
    S = 'h-2l w-2l',
    M = 'h-3xl w-3xl',
    L = 'h-7xl w-7xl',
    XL = 'h-15xl w-15xl',
}
