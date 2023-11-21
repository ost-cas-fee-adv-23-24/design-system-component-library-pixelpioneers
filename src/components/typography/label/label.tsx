import clsx from 'clsx';
import { LabelProps } from './types';
import { FC } from 'react';

export const Label: FC<LabelProps> = ({ text, size, className = 'text-inherit', htmlFor }) => {
    const fontClasses = 'font-default font-semibold leading-none';
    const sizeClasses = {
        s: 'text-xs',
        m: 'text-sm',
        l: 'text-lg',
        xl: 'text-xl',
    }[size];

    return (
        <label htmlFor={htmlFor} className={clsx(fontClasses, sizeClasses, className)}>
            {text}
        </label>
    );
};
