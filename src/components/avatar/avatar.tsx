import clsx from 'clsx';
import { FC } from 'react';
import { AvatarProps } from './types';
import { IconEdit } from '../../elements';

export const Avatar: FC<AvatarProps> = ({
    src,
    className,
    alt,
    iconEditModeSize,
    imageSize,
    ringVariant,
    editMode = false,
    onClick,
}) => {
    const avatarBorderClasses = clsx(
        'flex items-center justify-center',
        'relative',
        src && 'hover:cursor-pointer',
        'duration-3000 transition-all ease-out',
        'rounded-s',
        'group',
        className,
    );
    const avatarClasses = clsx(
        'flex items-center justify-center',
        'overflow-hidden rounded-full bg-primary-200',
        ringVariant,
        imageSize,
    );

    return (
        <div className={avatarBorderClasses}>
            <div className={avatarClasses}>
                {src && (
                    <img
                        src={src}
                        title={alt}
                        alt={alt}
                        className={clsx(
                            'h-full w-full object-cover',
                            !editMode && 'duration-300 ease-in-out group-hover:scale-125',
                        )}
                    />
                )}
                {editMode && (
                    <div
                        className="absolute bottom-2xs right-2xs h-xl w-xl rounded-full bg-secondary-600"
                        onClick={onClick}
                    >
                        <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                            <IconEdit
                                title="Edit Avatar"
                                size={iconEditModeSize}
                                className="fill-white"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
