import { FC } from 'react';
import { MenuBarProps } from './types';
import clsx from 'clsx';
import { IconSize } from '../../elements/icons/types';
import { IconLogoutAnimated, IconSettings } from '../../elements';

export const MenuBar: FC<MenuBarProps> = ({ bgColor, alignment, onClick }) => {
    const menuBarClasses = clsx(
        `flex h-2xl w-full flex-row items-center gap-x-xs p-m ${bgColor && bgColor} ${
            alignment && alignment
        }`,
    );

    const borderIconClasses = clsx(
        'flex flex-row items-center justify-center',
        'h-l w-l',
        'hover:cursor-pointer',
        'group rounded-s bg-primary-600',
    );

    const animatedIconClasses = clsx(
        'transform-none transition duration-1000',
        'h-s w-s',
        'fill-white',
    );

    return (
        <nav className={menuBarClasses}>
            <section onClick={onClick} className={clsx(borderIconClasses)}>
                <IconSettings
                    size={IconSize.M}
                    className={clsx(animatedIconClasses, 'group-hover:rotate-180')}
                />
            </section>
            <section onClick={onClick} className={borderIconClasses}>
                <IconLogoutAnimated size={IconSize.M} className={animatedIconClasses} />
            </section>
        </nav>
    );
};
