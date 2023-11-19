export interface AvatarProps {
    src: string;
    alt: string;
    className?: string;
    variant: AvatarVariant;
    onClick: () => void;
}

export enum AvatarVariant {
    S = 's',
    M = 'm',
    L = 'l',
    XL = 'xl',
    EDIT = 'edit',
}
