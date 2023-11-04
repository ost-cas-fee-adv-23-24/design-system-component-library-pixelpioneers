import clsx from 'clsx';
import type { FC } from 'react';
import type { IconProps } from '../types';

export const IconReplyFilled: FC<IconProps> = ({ title, className }) => {
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
                    d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7c.4 0 .8 0 1.1-.1L14 16v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7Z"
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
