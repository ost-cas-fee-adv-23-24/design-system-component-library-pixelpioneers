export interface LabelProps {
    text: string;
    size: LabelSize;
    className?: string;
    /**
     * htmlFor - input id, used to link with input field
     */
    htmlFor?: string;
}

export enum LabelSize {
    S = 's',
    M = 'm',
    L = 'l',
    XL = 'xl',
}
