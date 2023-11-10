import { FC } from 'react';
import { MenuBarProps } from './types';
import clsx from 'clsx';
import { IconSize } from '../../elements/icons/types';

export const MenuBar: FC<MenuBarProps> = ({ Icon, bgColor, iconClasses }) => {
    const menuBarClasses = clsx(
        `rounded-lg p-2 gap-1 group flex h-2xl w-full flex-col items-center ${bgColor && bgColor}`,
    );

    return (
        <nav className={menuBarClasses}>
            <div className="group">
                <Icon size={IconSize.M} className={iconClasses} />
            </div>
        </nav>
    );
};
