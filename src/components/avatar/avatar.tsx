import clsx from 'clsx';
import { FC } from 'react';
import { AvatarProps } from './types';
import { IconEdit } from '../../elements';

// TODO: We do need onClick Event for the Edit Mode
export const Avatar: FC<AvatarProps> = ({
    src,
    className,
    alt,
    sizes,
    imageSize,
    ringVariant,
    editMode = false,
}) => {
    // TODO: Need to clarify why here is not working with h-14 and w-15 or we can use new measurements from Tailwind Config
    const avatarBorder = 'flex items-center justify-center rounded-s relative';
    const ringClasses = ringVariant;
    const avatarClasses =
        'flex items-center justify-center rounded-full bg-primary-200 overflow-hidden';

    console.log(editMode);

    return (
        <div className={clsx(avatarBorder, className)}>
            <div className={clsx(avatarClasses, imageSize)}>
                <img
                    src={src}
                    alt={alt}
                    sizes={sizes}
                    className={clsx('h-full w-full object-cover', ringClasses)}
                />
                {editMode && (
                    <div className="absolute bottom-[5px] right-[5px]">
                        <IconEdit
                            title="Edit Avatar"
                            size={sizes}
                            className="rounded-full bg-white"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
