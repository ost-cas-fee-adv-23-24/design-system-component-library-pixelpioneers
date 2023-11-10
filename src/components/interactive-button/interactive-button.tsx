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
    const buttonClasses = 'flex justify-center gap-xs rounded-m px-base py-xs transition-all';
    const iconClasses = 'self-center';
    return (
        <button
            className={clsx(buttonClasses, className)}
            onClick={onClick}
            disabled={disabled}
            name={name}
            aria-label={name}
        >
            {Icon && <Icon size={IconSize.M} className={iconClasses} />}
            {label && <Label text={label} size={LabelSize.M} />}
        </button>
    );
};
