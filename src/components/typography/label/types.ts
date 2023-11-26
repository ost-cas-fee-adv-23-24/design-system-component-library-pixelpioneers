import { HTMLAttributes, LabelHTMLAttributes } from 'react';

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
    /**
     * Label used as actual HTML-label for forms
     */
    type?: LabelType.LABEL;
    size: LabelSize;
};

export type LabelSpanProps = HTMLAttributes<HTMLSpanElement> & {
    /**
     * Label used as HTML-span for buttons and more
     */
    type?: LabelType.SPAN;
    size: LabelSize;
};

export enum LabelSize {
    S = 's',
    M = 'm',
    L = 'l',
    XL = 'xl',
}

export enum LabelType {
    LABEL = 'label',
    SPAN = 'span',
}
