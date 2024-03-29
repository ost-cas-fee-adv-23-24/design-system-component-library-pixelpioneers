'use client';
import type { FC } from 'react';
import { type IconProps, IconSize } from '../types';

export const IconShare: FC<IconProps> = ({ title, className, size = IconSize.M }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 16 16"
        className={className}
        aria-hidden={true}
    >
        {title && <title>{title}</title>}
        <path d="M12 6c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3c0 .224.029.44.075.65L5.856 5.661A2.972 2.972 0 0 0 4 5C2.346 5 1 6.346 1 8s1.346 3 3 3c.704 0 1.344-.254 1.856-.661l3.219 2.012A3.009 3.009 0 0 0 9 13c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3c-.704 0-1.343.254-1.856.661L6.925 8.649C6.971 8.44 7 8.223 7 8c0-.224-.029-.44-.075-.649l3.22-2.012A2.97 2.97 0 0 0 12 6Zm0-4a1.001 1.001 0 0 1 0 2 1.001 1.001 0 0 1 0-2ZM4 9a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2Zm8 3a1.001 1.001 0 0 1 0 2 1.001 1.001 0 0 1 0-2Z" />
    </svg>
);
