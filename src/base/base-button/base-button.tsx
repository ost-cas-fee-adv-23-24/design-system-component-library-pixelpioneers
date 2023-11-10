import { FC } from 'react';
import { BaseButtonProps } from './types';
import clsx from 'clsx';

/** base button used for design system buttons */
export const BaseButton: FC<BaseButtonProps> = ({
    onClick,
    className = '',
    fill = false,
    name,
    disabled = false,
    children,
}) => (
    <button
        className={clsx(
            'flex justify-center',
            fill && 'w-full',
            className,
            disabled && 'cursor-not-allowed',
        )}
        onClick={onClick}
        disabled={disabled}
        name={name}
        aria-label={name}
    >
        {children}
    </button>
);
