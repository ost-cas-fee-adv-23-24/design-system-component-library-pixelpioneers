import clsx from 'clsx';
import type { FC } from 'react';
import type { IconProps } from '../types';

export const IconRepost: FC<IconProps> = ({ title, className }) => {
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
                    d="M14.413.389a.5.5 0 0 0-.849-.235l-1.488 1.559a7.494 7.494 0 1 0 3.062 8.595 1 1 0 0 0-1.9-.616 5.513 5.513 0 1 1-2.573-6.5l-1.6 1.68a.5.5 0 0 0 .27.837L15.157 6.8a.478.478 0 0 0 .31-.04.5.5 0 0 0 .27-.563L14.412.389Z"
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
