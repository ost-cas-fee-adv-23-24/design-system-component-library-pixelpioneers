import clsx from 'clsx';
import { ParagraphProps } from './types';
import { FC } from 'react';

export const Paragraph: FC<ParagraphProps> = ({ text, size, className = 'text-inherit' }) => {
    const fontClasses = 'font-default font-medium';
    const sizeClasses = {
        m: 'text-base leading-m',
        l: 'text-xl leading-l',
    }[size];

    return <p className={clsx(fontClasses, sizeClasses, className)}>{text}</p>;
};
