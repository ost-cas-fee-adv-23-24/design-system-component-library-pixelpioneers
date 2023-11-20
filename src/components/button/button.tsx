import { FC } from 'react';
import clsx from 'clsx';
import { ButtonProps } from './types';
import { Variant } from '../../utlis';
import { BaseButton } from '../../base/base-button/base-button';
import { Label, LabelSize } from '../typography';
import { IconSize } from '../../elements';

export const Button: FC<ButtonProps> = ({
    variant = Variant.PRIMARY,
    size,
    label,
    Icon,
    onClick,
    disabled = false,
    fill = false,
    name = 'button',
    className,
}) => {
    const buttonClasses = clsx(
        `hover:ring-3 active:ring-4`,
        {
            primary: `bg-primary-600 fill-white text-white hover:bg-primary-700 hover:ring-primary-100 active:bg-primary-700 active:ring-primary-200`,
            secondary: `bg-secondary-600 fill-white text-white hover:bg-secondary-700 hover:ring-secondary-100 active:bg-secondary-700 active:ring-secondary-200`,
            tertiary:
                'bg-gradient-to-r from-tertiary-500 to-primary-500 fill-white text-white hover:bg-gradient-30-70 hover:ring-primary-100 active:bg-gradient-20-80 active:ring-primary-200',
            special:
                'bg-secondary-300 fill-secondary-500 text-secondary-500 hover:bg-secondary-200 hover:ring-secondary-100 active:bg-secondary-200 active:ring-secondary-200',
        }[variant],
        {
            m: 'gap-xs rounded-s p-base',
            l: `${label ? 'rounded-s px-m py-s' : 'rounded-full p-s'} gap-base`,
        }[size],
        className,
    );
    const transitionClasses = 'transition-all duration-350 active:duration-300 ease-in-out';

    return (
        <BaseButton
            onClick={onClick}
            className={clsx(buttonClasses, transitionClasses)}
            disabled={disabled}
            fill={fill}
            name={name}
        >
            {label && <Label text={label} size={LabelSize.M} />}
            <Icon size={IconSize.M} className={'self-center'} />
        </BaseButton>
    );
};
