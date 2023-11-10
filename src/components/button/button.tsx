import { FC } from 'react';
import clsx from 'clsx';
import { ButtonProps } from './types';
import { Label, LabelSize } from '../typography';
import { IconSize } from '../../elements';
import { Variant } from '../../utlis';

export const Button: FC<ButtonProps> = ({
    variant = Variant.PRIMARY,
    size,
    label,
    Icon,
    onClick,
    disabled = false,
    fill = false,
    name = 'button',
}) => {
    const buttonClasses = clsx(
        `flex justify-center hover:ring-3 active:ring-4 ${fill && 'w-full'}`,
        {
            primary: `bg-primary-600 hover:bg-primary-700 hover:ring-primary-100 active:bg-primary-700 active:ring-primary-200`,
            secondary: `bg-secondary-600 hover:bg-secondary-700 hover:ring-secondary-100 active:bg-secondary-700 active:ring-secondary-200`,
            tertiary:
                'bg-gradient-to-r from-tertiary-500 to-primary-500 hover:bg-gradient-30-70 hover:ring-primary-100 active:bg-gradient-20-80 active:ring-primary-200',
        }[variant],
        {
            m: 'gap-xs rounded-s p-base',
            l: `${label ? 'rounded-s px-m py-s' : 'rounded-full p-s'} gap-base`,
        }[size],
    );

    const transitionClasses = 'transition-all duration-350 active:duration-300 ease-in-out';
    const labelClasses = 'text-white';
    const iconClasses = 'self-center fill-white';

    return (
        <button
            type="button"
            className={clsx(buttonClasses, transitionClasses)}
            disabled={disabled}
            onClick={onClick}
            name={name}
            aria-label={name}
        >
            {label && <Label text={label} size={LabelSize.M} className={labelClasses} />}
            <Icon size={IconSize.M} className={iconClasses} />
        </button>
    );
};
