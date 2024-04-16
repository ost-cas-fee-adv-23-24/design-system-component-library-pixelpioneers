import { FC } from 'react';
import { AvatarEditSize, EditAvatarProps } from './types';
import { Avatar } from './avatar';
import { IconEdit } from '../../elements';
import { IconOnlyButton } from '../icon-only-button';
import clsx from 'clsx';

export const EditAvatar: FC<EditAvatarProps> = ({ src, alt = 'avatar', onEdit, size }) => {
    const editIconSizeClasses = clsx(
        'absolute',
        size === AvatarEditSize.XL ? 'bottom-0 right-0' : 'bottom-[-10px] right-[-10px]',
    );

    return (
        <div className="relative h-fit w-fit">
            <Avatar src={src} alt={alt} size={size} />
            <IconOnlyButton
                id={`edit-${alt}`}
                name={`edit-${alt}`}
                aria-label={`edit-${alt}`}
                Icon={IconEdit}
                onClick={onEdit}
                className={editIconSizeClasses}
            />
        </div>
    );
};
