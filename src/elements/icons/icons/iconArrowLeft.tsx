import clsx from 'clsx';
import type { FC } from 'react';
import type { IconProps } from '../types';

export const IconArrowLeft: FC<IconProps> = ({ title, className }) => {
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
                    d="M15 7H7V4a1 1 0 0 0-1.625-.781l-5 4a1 1 0 0 0 0 1.562l5 4A1 1 0 0 0 7 12V9h8a1 1 0 0 0 0-2Z"
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
