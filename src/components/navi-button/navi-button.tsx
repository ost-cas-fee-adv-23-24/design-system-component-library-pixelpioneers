import { FC } from 'react';
import { NaviButtonProps } from './types';
import clsx from 'clsx';
import { Label, LabelSize, LabelType } from '../typography';
import { BaseButton } from '../../base/base-button/base-button';
import { IconSize } from '../../elements';

export const NaviButton: FC<NaviButtonProps> = ({
    onClick,
    className,
    Icon,
    label,
    name = 'navi-button',
    ...props
}) => {
    const buttonClasses = clsx(
        'flex flex-col items-center justify-center',
        'h-xxl w-xxl',
        'hover:cursor-pointer',
        'group rounded-s',
        'group-hover:bg-primary-700',
        className,
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
                <Label type={LabelType.SPAN} className="pt-2xs" size={LabelSize.S}>
                    {label}
                </Label>
            )}
        </BaseButton>
    );
};
