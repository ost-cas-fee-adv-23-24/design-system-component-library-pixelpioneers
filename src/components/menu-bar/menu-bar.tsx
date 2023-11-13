import { FC } from 'react';
import { MenuBarProps } from './types';
import clsx from 'clsx';
import { IconSize } from '../../elements/icons/types';
import { IconLogoutAnimated, IconSettings } from '../../elements';

export const MenuBar: FC<MenuBarProps> = ({
    navBgColor,
    alignment,
    onClick,
    className,
    borderActive = false,
}) => {
    const alignmentClasses =
        alignment &&
        {
            left: 'justify-start',
            right: 'justify-end',
        }[alignment];

    const menuBarClasses = clsx(
        `flex h-2xl w-full flex-row items-center p-m ${borderActive && `gap-x-xs`} ${
            navBgColor && navBgColor
        }`,
        alignmentClasses,
    );

    const borderIconClasses = clsx(
        'flex flex-row items-center justify-center',
        'h-l w-l',
        'hover:cursor-pointer',
        'group rounded-s',
        borderActive && className,
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
