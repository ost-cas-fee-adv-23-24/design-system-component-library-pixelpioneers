import { FC } from 'react';
import { AvatarSize, EditAvatarProps } from './types';
import { Avatar } from './avatar';
import { IconEdit } from '../../elements';
import { IconOnlyButton } from '../icon-only-button';

export const EditAvatar: FC<EditAvatarProps> = ({ src, className, alt, onEdit }) => (
    <div className="relative">
        <Avatar src={src} alt={alt} size={AvatarSize.XL} className={className} />
        <IconOnlyButton
            name="edit-avatar"
            Icon={IconEdit}
            onClick={onEdit}
            className="absolute bottom-0 right-0"
        />
    </div>
);
