import { FC } from 'react';
import { AvatarSize, EditAvatarProps } from './types';
import { Avatar } from './avatar';
import { IconEdit } from '../../elements';
import { IconButton } from '../icon-button';

export const EditAvatar: FC<EditAvatarProps> = ({ src, className, alt, onEdit }) => (
    <div className="relative">
        <Avatar src={src} alt={alt} size={AvatarSize.XL} className={className} />
        <IconButton
            name="edit-avatar"
            Icon={IconEdit}
            onClick={onEdit}
            className="absolute bottom-0 right-0"
        />
    </div>
);
