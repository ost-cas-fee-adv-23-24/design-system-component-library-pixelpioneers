import { FC } from 'react';
import { NaviButtonProps } from './types';
import clsx from 'clsx';
import { Label, LabelSize } from '../typography';
import { BaseButton } from '../../base/base-button/base-button';
import { IconSize } from '../../elements/icons/types';

export const NaviButton: FC<NaviButtonProps> = ({ onClick, className, Icon, label }) => {
    const borderButtonClasses = clsx(
        'flex flex-row items-center justify-center',
        'h-xxl w-xxl',
        'hover:cursor-pointer',
        'group rounded-s',
        className,
    );

    const iconClasses = clsx('self-center fill-white');
    const isIconSettings =
        Icon.displayName === 'IconSettings'
            ? 'transform-none transition duration-1000 group-hover:rotate-180'
            : '';

    return (
        <section className={clsx(borderButtonClasses)}>
            {onClick && (
                <BaseButton
                    className={clsx('flex flex-col group-hover:bg-primary-700', className)}
                    onClick={onClick}
                >
                    {Icon && (
                        <div className={clsx(iconClasses, isIconSettings)}>
                            <Icon size={IconSize.M} className={clsx('self-center')} />
                        </div>
                    )}
                    {label && <Label text={label} className="pt-2xs" size={LabelSize.S} />}
                </BaseButton>
            )}
        </section>
    );
};
