export interface LabelProps {
    text: string;
    size: LabelSize;
    className?: string;
}

export enum LabelSize {
    S = 's',
    M = 'm',
    L = 'l',
    XL = 'xl',
}
