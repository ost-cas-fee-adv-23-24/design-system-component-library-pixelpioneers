'use client';
import type { FC } from 'react';
import { type IconProps, IconSize } from '../types';

export const IconArrowDown: FC<IconProps> = ({ title, className, size = IconSize.M }) => (
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
            <path d="M12 9H9V1a1 1 0 0 0-2 0v8H4a1 1 0 0 0-.78 1.625l4 5a1 1 0 0 0 1.561 0l4-5A1 1 0 0 0 12.001 9Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);
