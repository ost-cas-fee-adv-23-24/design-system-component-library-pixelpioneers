import type { FC } from 'react';
import { type IconProps, IconSize } from '../types';

export const IconCheckmark: FC<IconProps> = ({ title, className, size = IconSize.M }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 16 16"
        className={className}
        aria-hidden={true}
    >
        {title && <title>{title}</title>}
        <path d="M5.6 9.6 2.753 6.754a.5.5 0 0 0-.707 0L.353 8.446a.5.5 0 0 0 0 .708l4.893 4.893a.5.5 0 0 0 .707 0l9.693-9.693a.5.5 0 0 0 0-.708l-1.693-1.692a.5.5 0 0 0-.707 0L5.6 9.6Z" />
    </svg>
);
