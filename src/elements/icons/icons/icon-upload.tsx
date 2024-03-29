'use client';
import type { FC } from 'react';
import { type IconProps, IconSize } from '../types';

export const IconUpload: FC<IconProps> = ({ title, className, size = IconSize.M }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 16 16"
        className={className}
        aria-hidden={true}
    >
        {title && <title>{title}</title>}
        <path d="M14 10a1 1 0 0 0-1 1v2H3v-2a1 1 0 0 0-2 0v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2a1 1 0 0 0-1-1Z" />
        <path d="M4.707 6.707 7 4.414V10a1 1 0 1 0 2 0V4.414l2.293 2.293a1 1 0 0 0 1.414-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414Z" />
    </svg>
);
