import { FC } from 'react';
import { NaviUserProps } from './types';
import { BaseButton } from '../../base/base-button/base-button';
import { Avatar, AvatarSize } from '../avatar';
import clsx from 'clsx';

export const NaviUser: FC<NaviUserProps> = ({
    onClick,
    name = 'navi-user',
    avatarSrc,
    avatarAlt,
    className,
    ...props
}) => (
    <BaseButton
        onClick={onClick}
        name={name}
        className={clsx(
            'group-hover group rounded-s bg-primary-600 p-xs hover:bg-primary-700',
            'transition-all duration-300 ease-out',
            className,
        )}
        aria-label={props['aria-label'] || name}
        {...props}
    >
        <Avatar src={avatarSrc} alt={avatarAlt} size={AvatarSize.S} />
    </BaseButton>
);
