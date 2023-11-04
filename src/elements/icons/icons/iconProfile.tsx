import clsx from 'clsx';
import type { FC } from 'react';
import type { IconProps } from '../types';

export const IconProfile: FC<IconProps> = ({ title, className }) => {
    const iconClasses = clsx(className);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
            className={iconClasses}
        >
            {title && <title>{title}</title>}
            <path
                fill="#475569"
                d="M8 7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM8 8.5a7.008 7.008 0 0 0-7 7 .5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5 7.008 7.008 0 0 0-7-7Z"
            />
        </svg>
    );
};
