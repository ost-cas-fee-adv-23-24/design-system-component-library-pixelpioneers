import React, { FC, useState } from 'react';
import { ToggleProps } from './types';
import { Variant } from '../../utlis';
import clsx from 'clsx';
import { Label, LabelSize } from '../typography';
import { IconSize } from '../../elements';

export const InteractiveButton: FC<ToggleProps> = ({
    label,
    Icon,
    variant = Variant.PRIMARY,
    isActive = false,
    onClick,
    disabled = false,
    name = 'interactive-button',
    className = '',
}) => {
    const [active, setActive] = useState(isActive);

    const toggleClasses = 'flex gap-xs px-base py-xs rounded-m justify-center';
    const variantClasses = {
        primary: `text-secondary-600 hover:text-primary-600 hover:fill-primary-600 hover:bg-primary-50 ${
            active ? 'fill-primary-600' : 'fill-secondary-600'
        }`,
        secondary: `text-secondary-600 hover:text-secondary-700 fill-secondary-600 hover:fill-secondary-700 hover:bg-secondary-100`,
        tertiary: `hover:text-tertiary-600 hover:fill-tertiary-600 hover:bg-tertiary-50 ${
            active ? 'text-tertiary-900 fill-tertiary-600' : 'text-secondary-600 fill-secondary-600'
        }`,
    }[variant];
    const iconClasses = 'self-center';
    return (
        <button
            className={clsx(toggleClasses, variantClasses, className)}
            onClick={() => {
                setActive(!active);
                onClick();
            }}
            disabled={disabled}
            name={name}
            aria-label={name}
        >
            {Icon && <Icon size={IconSize.M} className={clsx(iconClasses)} />}
            <Label text={label} size={LabelSize.M} />
        </button>
    );
};
