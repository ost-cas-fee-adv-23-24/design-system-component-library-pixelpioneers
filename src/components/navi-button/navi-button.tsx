'use client';
import { FC } from 'react';
import { NaviButtonProps } from './types';
import clsx from 'clsx';
import { Label, LabelSize, LabelType } from '../typography';
import { BaseButton } from '../../base/base-button/base-button';
import { IconSize } from '../../elements';

export const NaviButton: FC<NaviButtonProps> = ({
    onClick,
    Icon,
    label,
    name = 'navi-button',
    ...props
}) => {
    const buttonClasses = clsx(
        'flex flex-col items-center justify-center',
        'h-xxl gap-2xs p-xs',
        'hover:cursor-pointer',
        'group rounded-s',
        'group-hover:bg-primary-700',
        'transition-all duration-300 ease-in-out',
        'bg-primary-600 text-white hover:bg-primary-700',
    );
    const iconClasses = 'self-center fill-white';

    return (
        <BaseButton className={buttonClasses} onClick={onClick} name={name} {...props}>
            {Icon && (
                <div className={iconClasses}>
                    <Icon size={IconSize.M} className="self-center" />
                </div>
            )}
            {label && (
                <Label type={LabelType.SPAN} size={LabelSize.S}>
                    {label}
                </Label>
            )}
        </BaseButton>
    );
};
