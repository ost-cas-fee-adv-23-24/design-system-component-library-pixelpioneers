import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}

export const Button = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    ...props
}: ButtonProps) => {
    const mode = primary
        ? 'bg-gradient-to-r from-pink-500 to-violet-500 hover:bg-gradient-to-r hover:from-pink-200 hover:to-violet-200'
        : 'bg-pink-500 hover:bg-pink-600';

    const sizeClasses = {
        small: 'px-2 py-1 text-sm',
        medium: 'px-3 py-2 text-base',
        large: 'px-4 py-3 text-lg',
    }[size];

    return (
        <button
            type="button"
            className={clsx(sizeClasses, mode, backgroundColor, 'text-white')}
            {...props}
        >
            {label}
        </button>
    );
};
