import clsx from 'clsx';
import type { FC } from 'react';
import type { IconProps } from '../types';

export const IconArrowRight: FC<IconProps> = ({ title, className }) => {
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
                    fill="currentColor"
                    d="M10.625 3.219A1 1 0 0 0 9 4v3H1a1 1 0 0 0 0 2h8v3a1 1 0 0 0 1.625.781l5-4a1 1 0 0 0 0-1.562l-5-4Z"
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
