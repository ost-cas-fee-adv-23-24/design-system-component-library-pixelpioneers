import { FC } from 'react';
import { MenuBarButtonProps } from './types';
import clsx from 'clsx';

export const MenuBarButton: FC<MenuBarButtonProps> = ({ children, bgColor }) => {
    const menuBarClasses = clsx(
        `rounded-lg p-2 gap-1 group flex h-2xl w-full flex-col items-center ${bgColor && bgColor}`,
    );

    return (
        <nav className={menuBarClasses}>
            {children}
            Icons will be here...
        </nav>
    );
};
