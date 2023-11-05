import React from 'react';
import clsx from 'clsx';

interface Props {
    color?: ButtonColor;
    size?: ButtonSize;
    label: string;
    onClick?: () => void;
}

enum ButtonColor {
    SLATE = 'slate',
    VIOLET = 'violet',
    GRADIENT = 'gradient',
}

enum ButtonSize {
    MEDIUM = 'medium',
    LARGE = 'large',
}

export const Button = ({
    color = ButtonColor.SLATE,
    size = ButtonSize.MEDIUM,
    label,
    ...props
}: Props) => {
    const colorClasses = {
        slate: 'bg-slate-600 hover:bg-slate-700',
        violet: 'bg-violet-600 hover:bg-violet-700',
        gradient:
            'bg-gradient-to-r from-pink-500 to-violet-500 hover:bg-gradient-to-r hover:from-pink-200 hover:to-violet-200',
    }[color];

    const sizeClasses = {
        medium: 'p-[12px] text-base',
        large: 'p-s text-lg',
    }[size];

    return (
        <button
            type="button"
            className={clsx(sizeClasses, colorClasses, 'rounded-s font-poppins text-white')}
            {...props}
        >
            {label}
        </button>
    );
};
