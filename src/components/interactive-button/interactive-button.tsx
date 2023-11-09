import React, { FC } from 'react';
import { InteractiveButtonProps } from './types';
import clsx from 'clsx';
import { Label, LabelSize } from '../typography';
import { IconSize } from '../../elements';

export const InteractiveButton: FC<InteractiveButtonProps> = ({
    label,
    Icon,
    onClick,
    disabled = false,
    name = 'interactive-button',
    className = '',
}) => {
    const buttonClasses = clsx(
        'flex justify-center gap-xs rounded-m px-base py-xs',
        /*{
tertiary: `hover:bg-tertiary-50 hover:fill-tertiary-600 hover:text-tertiary-600 ${
active
? 'fill-tertiary-600 text-tertiary-900'
: 'fill-secondary-600 text-secondary-600'
}`,
}[variant],*/
    );
    const transitionClasses = clsx(
        'transition-all',
        /*{
tertiary: `${active ? 'duration-300 ease-out' : 'duration-350 ease-in-out'}`,
}[variant],*/
    );
    const iconClasses = 'self-center';
    return (
        <button
            className={clsx(buttonClasses, transitionClasses, className)}
            onClick={onClick}
            disabled={disabled}
            name={name}
            aria-label={name}
        >
            {Icon && <Icon size={IconSize.M} className={clsx(iconClasses)} />}
            <Label text={label} size={LabelSize.M} />
        </button>
    );
};
