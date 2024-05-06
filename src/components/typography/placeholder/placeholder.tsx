import clsx from 'clsx';
import { PlaceholderProps, PlaceholderSize } from './types';
import { FC } from 'react';

export const Placeholder: FC<PlaceholderProps> = ({
    children,
    size = PlaceholderSize.M,
    className = 'text-inherit',
    ...props
}) => (
    <span
        className={clsx(
            'font-semibold leading-none',
            {
                s: 'text-xs',
                m: 'text-sm',
                l: 'text-lg',
                xl: 'text-xl',
            }[size],
            className,
        )}
        {...props}
    >
        {children}
    </span>
);
