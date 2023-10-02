import React from 'react';

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
        ? 'bg-red-300 hover:bg-red-500'
        : 'bg-amber-300 hover:bg-amber-500';
    return (
        <button
            type="button"
            className={['text-white py-2 px-4 rounded', mode].join(' ')}
            // TODO: Fix it later / size behaviour
            //  className={[mode, `storybook-button--${size}`,  'p-10 bg-amber-800'].join(' ')}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};
