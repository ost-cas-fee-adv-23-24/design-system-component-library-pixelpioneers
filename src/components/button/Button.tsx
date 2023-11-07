import React from 'react';
import clsx from 'clsx';
import { Label } from '../../elements/typography/label/label';
import { ButtonColor, ButtonProps } from './types';

export const Button = ({
    color = ButtonColor.SLATE,
    size = 'm',
    label,
    icon,
    disabled = false,
}: ButtonProps) => {
    const colorClasses = {
        slate: 'bg-slate-600 hover:bg-slate-700',
        violet: 'bg-violet-600 hover:bg-violet-700',
        gradient:
            'bg-gradient-to-r from-pink-500 to-violet-500 hover:bg-gradient-to-r hover:from-pink-200 hover:to-violet-200',
    }[color];

    const sizeClasses = {
        m: 'p-[12px] gap-s',
        l: 'p-s gap-[12px]',
    }[size];

    return (
        <button
            id="button"
            type="button"
            className={clsx(sizeClasses, colorClasses, 'flex rounded-s')}
            disabled={disabled}
        >
            {label && <Label text={label} size="m" color="text-white" />}
            {icon && <span>{icon}</span>}
        </button>
    );
};
