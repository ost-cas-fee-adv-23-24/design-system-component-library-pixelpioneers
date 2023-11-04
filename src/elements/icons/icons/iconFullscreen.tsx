import clsx from 'clsx';
import type { FC } from 'react';
import type { IconProps } from '../types';

export const IconFullscreen: FC<IconProps> = ({ title, className }) => {
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
            <g fill="#475569" clipPath="url(#a)">
                <path d="M15 0h-5a1 1 0 1 0 0 2h2.587L9.294 5.293a1 1 0 1 0 1.414 1.414L14 3.414V6a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1ZM6.707 9.293a1 1 0 0 0-1.414 0L2 12.586V10a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H3.414l3.293-3.293a1 1 0 0 0 0-1.414Z" />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M0 0h16v16H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};
