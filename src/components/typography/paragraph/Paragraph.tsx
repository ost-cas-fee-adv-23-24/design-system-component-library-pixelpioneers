import clsx from 'clsx';
import { ParagraphProps } from './types';

export const Paragraph = ({ text, size, className = 'text-secondary-600' }: ParagraphProps) => {
    const fontClasses = 'font-default font-medium';
    const sizeClasses = {
        m: 'text-base leading-m',
        l: 'text-xl leading-l',
    }[size];

    return <p className={clsx(fontClasses, sizeClasses, className)}>{text}</p>;
};
