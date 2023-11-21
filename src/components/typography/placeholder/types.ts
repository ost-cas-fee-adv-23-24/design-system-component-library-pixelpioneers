export interface PlaceholderProps {
    text: string;
    size: PlaceholderSize;
    className?: string;
}

export enum PlaceholderSize {
    S = 's',
    M = 'm',
    L = 'l',
    XL = 'xl',
}
