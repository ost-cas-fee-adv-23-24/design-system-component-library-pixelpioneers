import { HTMLAttributes } from 'react';

export type PlaceholderProps = HTMLAttributes<HTMLSpanElement> & {
    size: PlaceholderSize;
};

export enum PlaceholderSize {
    S = 's',
    M = 'm',
    L = 'l',
    XL = 'xl',
}
