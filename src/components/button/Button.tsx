import React from 'react';
import clsx from 'clsx';
import { ButtonProps, ButtonVariant } from './types';
import { Label, LabelSize } from '../typography';
import { IconSize } from '../../elements';

export const Button = ({
    variant = ButtonVariant.PRIMARY,
    size,
    label,
    Icon,
    onClick,
    disabled = false,
    fill = false,
}: ButtonProps) => {
    const buttonClasses = `flex hover:ring-3 active:ring-4 justify-center ${fill && 'w-full'}`;
    const transitionClasses = 'transition-all duration-350 active:duration-300 ease-in-out';
    const variantClasses = {
        primary: `bg-primary-600 hover:bg-primary-700 hover:ring-primary-100 active:bg-primary-700 active:ring-primary-200`,
        secondary: `bg-secondary-600 hover:bg-secondary-700 hover:ring-secondary-100 active:bg-secondary-700 active:ring-secondary-200`,
        tertiary:
            'from-tertiary-500 to-primary-500 bg-gradient-to-r hover:bg-gradient-30-70 hover:ring-primary-100 active:bg-gradient-20-80 active:ring-primary-200',
    }[variant];
    const sizeClasses = {
        m: 'p-[12px] gap-xs rounded-s',
        l: `${label ? 'py-s px-m rounded-s' : 'p-s rounded-full'} gap-[12px]`,
    }[size];
    const iconClasses = 'self-center fill-white';

    return (
        <button
            type="button"
            className={clsx(buttonClasses, transitionClasses, sizeClasses, variantClasses)}
            disabled={disabled}
            onClick={onClick}
        >
            {label && <Label text={label} size={LabelSize.M} className="text-white" />}
            <Icon size={IconSize.M} className={iconClasses} />
        </button>
    );
};
