export interface ParagraphProps {
    text: string;
    size: ParagraphSize;
    className?: string;
}

export enum ParagraphSize {
    M = 'm',
    L = 'l',
}
