import { FC } from 'react';
import { MenuBarProps } from './types';
import clsx from 'clsx';
import { IconSize } from '../../elements/icons/types';

export const MenuBar: FC<MenuBarProps> = ({ Icon, bgColor, iconClasses }) => {
    const menuBarClasses = clsx(
        `p-2 gap-1 group flex w-full flex-col items-center ${bgColor && bgColor}`,
    );

    return (
        <nav className={menuBarClasses}>
            <section className="group flex h-l w-l flex-row items-center justify-center rounded-s bg-primary-600">
                <Icon size={IconSize.M} className={iconClasses} />
            </section>
        </nav>
    );
};
