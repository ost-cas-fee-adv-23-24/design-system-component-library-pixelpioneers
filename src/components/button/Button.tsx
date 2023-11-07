import React from 'react';
import clsx from 'clsx';
import { ButtonProps, ButtonVariant } from './types';
import { Label } from '../typography';
import { IconSize } from '../../elements';

export const Button = ({
    variant = ButtonVariant.PRIMARY,
    size,
    label,
    Icon,
    disabled = false,
}: ButtonProps) => {
    const buttonClasses = 'flex hover:ring-3 active:ring-4';
    const variantClasses = {
        primary: `bg-primary-600 hover:bg-primary-700 hover:ring-primary-100 active:bg-primary-700 active:ring-primary-200`,
        secondary: `bg-secondary-600 hover:bg-secondary-700 hover:ring-secondary-100 active:bg-secondary-700 active:ring-secondary-200`,
        tertiary: 'bg-gradient-to-r from-tertiary-500 to-primary-500',
    }[variant];
    const sizeClasses = {
        m: 'p-[12px] gap-xs rounded-s',
        l: `${label ? 'py-s px-m rounded-s' : 'p-s rounded-full'} gap-[12px]`,
    }[size];
    const iconClasses = 'self-center fill-pink-300';

    return (
        <button
            type="button"
            className={clsx(buttonClasses, sizeClasses, variantClasses)}
            disabled={disabled}
        >
            {label && <Label text={label} size="m" color="text-white" />}
            <Icon size={IconSize.M} className={iconClasses} />
        </button>
    );
};
