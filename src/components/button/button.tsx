import { FC, forwardRef } from 'react';
import clsx from 'clsx';
import { ButtonProps } from './types';
import { Variant } from '../../utlis';
import { BaseButton } from '../../base/base-button/base-button';
import { Label, LabelSize, LabelType } from '../typography';
import { IconSize } from '../../elements';
import React from 'react';

export const Button: FC<ButtonProps> = forwardRef(
    ({ variant = Variant.PRIMARY, size, label, Icon, onClick, className, ...props }, ref) => {
        const buttonClasses = clsx(
            `hover:ring-3 active:ring-4`,
            {
                primary: `bg-primary-600 fill-white text-white hover:bg-primary-700 hover:ring-primary-100 active:bg-primary-700 active:ring-primary-200`,
                secondary: `bg-secondary-600 fill-white text-white hover:bg-secondary-700 hover:ring-secondary-100 active:bg-secondary-700 active:ring-secondary-200`,
                tertiary:
                    'bg-gradient-to-r from-tertiary-500 to-primary-500 fill-white text-white hover:bg-gradient-30-70 hover:ring-primary-100 active:bg-gradient-20-80 active:ring-primary-200',
                quaternary:
                    'bg-secondary-300 fill-secondary-500 text-secondary-500 hover:bg-secondary-200 hover:ring-secondary-100 active:bg-secondary-200 active:ring-secondary-200',
            }[variant],
            {
                m: 'gap-xs rounded-s p-base',
                l: `${label ? 'rounded-s px-m py-s' : 'rounded-full p-s'} gap-base`,
            }[size],
            'transition-all duration-350 ease-in-out active:duration-300',
            'disabled:bg-secondary-400',
            className,
        );

        return (
            <BaseButton onClick={onClick} className={buttonClasses} ref={ref} {...props}>
                {label && (
                    <Label type={LabelType.SPAN} size={LabelSize.M}>
                        {label}
                    </Label>
                )}
                <Icon size={IconSize.M} className={'self-center'} />
            </BaseButton>
        );
    },
);
