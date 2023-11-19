import clsx from 'clsx';
import { FC } from 'react';
import { AvatarProps, AvatarVariant } from './types';
import { IconEdit } from '../../elements';
import { IconButton } from '../icon-button';

export const Avatar: FC<AvatarProps> = ({ src, className, alt, variant, onClick }) => {
    const avatarBorderClasses = clsx(
        'flex items-center justify-center',
        'relative',
        'rounded-s',
        'group',
        className,
    );
    const outlineClasses = 'outline outline-secondary-100 outline-[6px]';
    const xlClasses = `h-15xl w-15xl ${outlineClasses}`;
    const avatarClasses = clsx(
        'flex items-center justify-center',
        'overflow-hidden rounded-full bg-primary-200',
        {
            s: 'h-2l w-2l',
            m: `h-3xl w-3xl ${outlineClasses}`,
            l: `h-7xl w-7xl ${outlineClasses}`,
            xl: xlClasses,
            edit: xlClasses,
        }[variant],
    );

    return (
        <div className="relative">
            <div className={avatarBorderClasses}>
                <div className={avatarClasses}>
                    {src && (
                        <img
                            src={src}
                            title={alt}
                            alt={alt}
                            className={clsx(
                                'h-full w-full object-cover',
                                variant !== AvatarVariant.EDIT &&
                                    'duration-300 ease-in-out group-hover:scale-125',
                            )}
                        />
                    )}
                </div>
            </div>
            {variant === AvatarVariant.EDIT && (
                <IconButton
                    name="edit-avatar"
                    Icon={IconEdit}
                    onClick={onClick}
                    className={'absolute bottom-0 right-0'}
                />
            )}
        </div>
    );
};
