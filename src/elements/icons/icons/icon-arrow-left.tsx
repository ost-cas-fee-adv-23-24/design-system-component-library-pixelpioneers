import type { FC } from 'react';
import { type IconProps, IconSize } from '../types';

export const IconArrowLeft: FC<IconProps> = ({ title, className, size = IconSize.M }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 16 16"
        className={className}
    >
        {title && <title>{title}</title>}
        <g clipPath="url(#a)">
            <path d="M15 7H7V4a1 1 0 0 0-1.625-.781l-5 4a1 1 0 0 0 0 1.562l5 4A1 1 0 0 0 7 12V9h8a1 1 0 0 0 0-2Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);
