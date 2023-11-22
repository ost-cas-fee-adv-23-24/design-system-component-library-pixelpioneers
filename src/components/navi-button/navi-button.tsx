import { FC } from 'react';
import { NaviButtonProps } from './types';
import clsx from 'clsx';
import { Label, LabelSize } from '../typography';
import { BaseButton } from '../../base/base-button/base-button';
import { IconSize } from '../../elements/icons/types';

export const NaviButton: FC<NaviButtonProps> = ({ onClick, className, Icon, label, name }) => {
    const buttonClasses = clsx(
        'flex flex-col items-center justify-center',
        'h-xxl w-xxl',
        'hover:cursor-pointer',
        'group rounded-s',
        'group-hover:bg-primary-700',
        className,
        (name = 'navi-button'),
    );

    const iconClasses = clsx('self-center fill-white');

    return (
        <BaseButton className={clsx(buttonClasses, className)} onClick={onClick} name={name}>
            {Icon && (
                <div className={clsx(iconClasses)}>
                    <Icon size={IconSize.M} className={clsx('self-center')} />
                </div>
            )}
            {label && <Label text={label} className="pt-2xs" size={LabelSize.S} />}
        </BaseButton>
    );
};
