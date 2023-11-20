export interface AvatarProps {
    src?: string;
    alt?: string;
    className?: string;
    size: AvatarSize;
}

export type EditAvatarProps = Omit<AvatarProps, 'size'> & { onEdit: () => void };

export enum AvatarSize {
    S = 's',
    M = 'm',
    L = 'l',
    XL = 'xl',
}
