import { HTMLAttributes } from 'react';

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & {
    size: ParagraphSize;
};

export enum ParagraphSize {
    M = 'm',
    L = 'l',
}
