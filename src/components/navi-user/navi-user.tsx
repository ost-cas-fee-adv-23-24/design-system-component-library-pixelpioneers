import { FC } from 'react';
import { NaviUserProps } from './types';
import { BaseButton } from '../../base/base-button/base-button';
import { Avatar, AvatarSize } from '../avatar';
import clsx from 'clsx';

export const NaviUser: FC<NaviUserProps> = ({
    onClick,
    disabled = false,
    name = 'navi-user',
    avatarSrc,
    avatarAlt,
}) => {
    // TODO: Group hover?
    const buttonClasses = 'bg-primary-600 hover:bg-primary-700 rounded-s p-xs group-hover';
    const transitionClasses = 'transition-all duration-300 ease-out';
    return (
        <BaseButton
            onClick={onClick}
            name={name}
            className={clsx(buttonClasses, transitionClasses)}
            disabled={disabled}
        >
            <Avatar src={avatarSrc} alt={avatarAlt} size={AvatarSize.S} />
        </BaseButton>
    );
};
