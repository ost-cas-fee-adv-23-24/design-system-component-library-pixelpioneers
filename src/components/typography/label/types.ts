import { HTMLAttributes, LabelHTMLAttributes } from 'react';

export type LabelTypeProps = LabelHTMLAttributes<HTMLLabelElement> & {
    /**
     * Label used as actual HTML-label for forms
     */
    type?: LabelType.LABEL;
    size: LabelSize;
};

export type SpanTypeProps = HTMLAttributes<HTMLSpanElement> & {
    /**
     * Label used as HTML-span for buttons and more
     */
    type?: LabelType.SPAN;
    size: LabelSize;
};

export type LabelProps = LabelTypeProps | SpanTypeProps;

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
