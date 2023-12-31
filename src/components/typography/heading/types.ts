import { HTMLAttributes } from 'react';

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
    size: HeadingSize;
};

export enum HeadingSize {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
}
