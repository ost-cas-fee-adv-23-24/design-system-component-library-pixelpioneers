import clsx from 'clsx';
import type { FC } from 'react';
import { IconSize, type IconProps } from '../types';

export const IconArrowUp: FC<IconProps> = ({ title, className, size = IconSize.M }) => {
    const iconClasses = clsx(className);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="none"
            viewBox="0 0 16 16"
            className={iconClasses}
            aria-hidden={true}
        >
            {title && <title>{title}</title>}
            <g clipPath="url(#a)">
                <path
                    fill="currentColor"
                    d="M8.781.375a1.036 1.036 0 0 0-1.562 0l-4 5A1 1 0 0 0 4 7h3v8a1 1 0 0 0 2 0V7h3a1 1 0 0 0 .781-1.625l-4-5Z"
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
