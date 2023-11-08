import clsx from 'clsx';
import { LabelProps } from './types';

export const Label = ({ text, size, className = 'text-secondary-600' }: LabelProps) => {
    const fontClasses = 'font-default font-semibold';
    const sizeClasses = {
        s: 'text-xs',
        m: 'text-sm',
        l: 'text-lg',
        xl: 'text-xl',
    }[size];

    return <span className={clsx(fontClasses, sizeClasses, className)}>{text}</span>;
};
