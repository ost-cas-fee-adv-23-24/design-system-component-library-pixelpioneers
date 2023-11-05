export enum IconSize {
    SM = '12',
    MD = '16',
    LG = '32',
}

export type IconProps = {
    title?: string | null;
    className?: string;
    size?: IconSize;
};
