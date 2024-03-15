import { FC } from 'react';
import { AvatarSize, EditAvatarProps } from './types';
import { Avatar } from './avatar';
import { IconEdit } from '../../elements';
import { IconOnlyButton } from '../icon-only-button';

export const EditAvatar: FC<EditAvatarProps> = ({ src, alt = 'avatar', onEdit }) => (
    <div className="relative h-fit w-fit">
        <Avatar src={src} alt={alt} size={AvatarSize.XL} />
        <IconOnlyButton
            id={`edit-${alt}`}
            name={`edit-${alt}`}
            aria-label={`edit-${alt}`}
            Icon={IconEdit}
            onClick={onEdit}
            className="absolute bottom-0 right-0"
        />
    </div>
);
