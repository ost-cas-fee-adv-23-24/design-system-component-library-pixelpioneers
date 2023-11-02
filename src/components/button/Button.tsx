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
    const mode = primary ? 'bg-red-300 hover:bg-red-500' : 'bg-amber-300 hover:bg-amber-500';

    const sizeClasses = {
        small: 'px-2 font-poppins py-1 text-sm',
        medium: 'px-3 font-poppins py-2 text-base',
        large: 'px-4 font-poppins py-3 text-lg',
    }[size];

    return (
        <button
            id="button"
            type="button"
            className={clsx(sizeClasses, mode)}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};
