import clsx from 'clsx';
import { FC } from 'react';
import { AvatarProps, AvatarSize } from './types';

export const Avatar: FC<AvatarProps> = ({ src, className, alt = 'avatar', size }) => {
    const avatarBorderClasses = clsx(
        'flex items-center justify-center',
        'relative',
        'rounded-s',
        'group',
        className,
    );
    const outlineClasses = 'outline outline-secondary-100 outline-[6px]';
    const avatarClasses = clsx(
        'flex items-center justify-center',
        'overflow-hidden rounded-full bg-primary-200',
        {
            s: 'h-2l w-2l',
            m: `h-2xl w-2xl ${outlineClasses}`,
            l: `h-7xl w-7xl ${outlineClasses}`,
            xl: `h-15xl w-15xl ${outlineClasses}`,
        }[size],
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
                            size !== AvatarSize.XL &&
                                'duration-300 ease-in-out group-hover:scale-125',
                        )}
                    />
                )}
            </div>
        </div>
    );
};
