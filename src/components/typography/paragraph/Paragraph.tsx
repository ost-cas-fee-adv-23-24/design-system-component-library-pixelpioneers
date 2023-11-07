import clsx from 'clsx';
import { ParagraphProps } from './types';

export const Paragraph = ({ text, size, color }: ParagraphProps) => {
    const fontClasses = 'font-poppins font-medium';
    const sizeClasses = {
        m: 'text-base leading-m',
        l: 'text-xl leading-l',
    }[size];

    return <p className={clsx(fontClasses, sizeClasses, color)}>{text}</p>;
};
