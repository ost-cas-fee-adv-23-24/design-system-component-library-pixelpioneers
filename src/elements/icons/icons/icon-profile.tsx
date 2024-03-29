'use client';
import type { FC } from 'react';
import { type IconProps, IconSize } from '../types';

export const IconProfile: FC<IconProps> = ({ title, className, size = IconSize.M }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 16 16"
        className={className}
        aria-hidden={true}
    >
        {title && <title>{title}</title>}
        <path d="M8 7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM8 8.5a7.008 7.008 0 0 0-7 7 .5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5 7.008 7.008 0 0 0-7-7Z" />
    </svg>
);
