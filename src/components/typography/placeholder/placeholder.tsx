import clsx from 'clsx';
import { PlaceholderProps, PlaceholderSize } from './types';
import { FC } from 'react';

export const Placeholder: FC<PlaceholderProps> = ({
    text,
    size = PlaceholderSize.M,
    className = 'text-inherit',
}) => {
    const fontClasses = 'font-default font-semibold leading-none';
    const sizeClasses = {
        s: 'text-xs',
        m: 'text-sm',
        l: 'text-lg',
        xl: 'text-xl',
    }[size];

    return <span className={clsx(fontClasses, sizeClasses, className)}>{text}</span>;
};
