import { HTMLAttributes, LabelHTMLAttributes } from 'react';

type BaseLabelProps = {
    /**
     * Size of the label
     */
    size: LabelSize;
};

type LabelTypeProps = LabelHTMLAttributes<HTMLLabelElement> & {
    /**
     * Label used as actual HTML-label for forms
     */
    type?: LabelType.LABEL;
};

type SpanTypeProps = HTMLAttributes<HTMLSpanElement> & {
    /**
     * Label used as HTML-span for buttons and more
     */
    type?: LabelType.SPAN;
};

export type LabelProps = (LabelTypeProps | SpanTypeProps) & BaseLabelProps;

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
