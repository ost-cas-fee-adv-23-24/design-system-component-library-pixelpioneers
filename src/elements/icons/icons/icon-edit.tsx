import type { FC } from 'react';
import { type IconProps, IconSize } from '../types';

export const IconEdit: FC<IconProps> = ({ title, className, size = IconSize.M }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 16 16"
        className={className}
        aria-hidden={true}
    >
        {title && <title>{title}</title>}
        <g clipPath="url(#a)">
            <path d="M8.1 3.5.3 11.3c-.2.2-.3.4-.3.7v3c0 .6.4 1 1 1h3c.3 0 .5-.1.7-.3l7.8-7.8-4.4-4.4ZM15.7 3.3l-3-3c-.4-.4-1-.4-1.4 0L9.5 2.1l4.4 4.4 1.8-1.8c.4-.4.4-1 0-1.4Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);
