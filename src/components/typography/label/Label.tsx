import clsx from 'clsx';
import { LabelProps } from './types';

export const Label = ({ text, size, color }: LabelProps) => {
    const fontClasses = 'font-poppins font-semibold';
    const sizeClasses = {
        s: 'text-xs',
        m: 'text-sm',
        l: 'text-lg',
        xl: 'text-xl',
    }[size];

    return <span className={clsx(fontClasses, sizeClasses, color)}>{text}</span>;
};
