export type AvatarProps = {
    src?: string;
    alt?: string;
    size: AvatarSize | AvatarEditSize;
};

export type EditAvatarProps = AvatarProps & { onEdit: () => void };

export enum AvatarSize {
    S = 's',
    M = 'm',
    L = 'l',
    XL = 'xl',
}

export enum AvatarEditSize {
    L = 'l',
    XL = 'xl',
}
