import clsx from 'clsx';
import type { FC } from 'react';
import type { IconProps } from '../types';

export const IconLocation: FC<IconProps> = ({ title, className }) => {
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
            <g clipPath="url(#a)">
                <path
                    fill="#475569"
                    d="M8 0C4.1 0 1 3.1 1 7c0 1.9.7 3.7 2.1 5 .1.1 4.1 3.7 4.2 3.8.4.3 1 .3 1.3 0 .1-.1 4.2-3.7 4.2-3.8 1.4-1.3 2.1-3.1 2.1-5 .1-3.9-3-7-6.9-7Zm0 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z"
                />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M0 0h16v16H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};
