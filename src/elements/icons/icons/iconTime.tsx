import clsx from 'clsx';
import type { FC } from 'react';
import type { IconProps } from '../types';

export const IconTime: FC<IconProps> = ({ title, className }) => {
    const iconClasses = clsx(className);

    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className={iconClasses}
        >
            {title && <title>{title}</title>}
            <path
                fill="currentColor"
                d="m22.8 12.115-1.749-1.532-7.816 6.834V0h-2.481v17.471L2.95 10.637 1.2 12.169 11.97 21.6l10.83-9.485Z"
            />
        </svg>
    );
};
