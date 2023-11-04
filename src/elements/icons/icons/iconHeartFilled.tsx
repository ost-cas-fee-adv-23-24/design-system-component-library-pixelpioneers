import clsx from 'clsx';
import type { FC } from 'react';
import type { IconProps } from '../types';

export const IconHeartFilled: FC<IconProps> = ({ title, className }) => {
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
            <g clip-path="url(#a)">
                <path
                    fill="currentColor"
                    d="M11.6 0C10.1 0 8.8.8 8 2 7.2.8 5.9 0 4.4 0 2 0 0 2 0 4.4c0 4.4 8 10.9 8 10.9s8-6.5 8-10.9C16 2 14 0 11.6 0Z"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="currentColor" d="M0 0h16v16H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};
