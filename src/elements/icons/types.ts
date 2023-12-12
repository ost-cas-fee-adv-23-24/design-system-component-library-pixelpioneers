export enum IconSize {
    S = '12',
    M = '16',
    L = '32',
}

export type IconProps = {
    title?: string | null;
    className?: string;
    size?: IconSize;
};
