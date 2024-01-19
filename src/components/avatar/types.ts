export type AvatarProps = {
    src?: string;
    alt?: string;
    size: AvatarSize;
};

export type EditAvatarProps = Omit<AvatarProps, 'size'> & { onEdit: () => void };

export enum AvatarSize {
    S = 's',
    M = 'm',
    L = 'l',
    XL = 'xl',
}
