import clsx from 'clsx';
import type { FC } from 'react';
import type { IconProps } from '../types';

export const IconHeart: FC<IconProps> = ({ title, className }) => {
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
                    d="M7.4 15.5C6.6 14.8 0 9.3 0 5.1 0 2.4 2.2.3 4.8.3 6 .3 7.1.8 8 1.5 8.9.7 10 .3 11.2.3 13.9.3 16 2.5 16 5.1c0 4.2-6.6 9.7-7.4 10.3-.3.4-.9.4-1.2.1ZM4.8 2.3C3.3 2.3 2 3.6 2 5.1c0 2.2 3.5 6 6 8.2 2.1-1.9 6-5.8 6-8.2 0-1.6-1.3-2.8-2.8-2.8-.9 0-1.8.5-2.3 1.3-.4.6-1.3.6-1.7 0-.6-.8-1.4-1.3-2.4-1.3Z"
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
