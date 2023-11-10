import { type IconSize } from '../../elements/icons/types';

export interface AvatarProps {
    src: string;
    alt: string;
    className: string;
    imageSize: ImageSize;
    editMode: boolean;
    sizes: IconSize;
    ringVariant: string;
    onClick?: () => void;
}

export enum ImageSize {
    S = 'h-m w-m',
    M = 'h-l w-l',
    L = 'h-xl w-xl',
    XL = 'h-2xl w-2xl',
}
