import clsx from 'clsx';
import { LabelProps } from './types';

export const Label = ({ text, size, color }: LabelProps) => {
    const sizeClasses = {
        s: 'text-xs',
        m: 'text-sm',
        l: 'text-lg',
        xl: 'text-xl',
    }[size];

    return <span className={clsx(sizeClasses, color, 'font-poppins font-semibold')}>{text}</span>;
};
