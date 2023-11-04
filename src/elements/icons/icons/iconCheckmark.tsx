import clsx from 'clsx';
import type { FC } from 'react';
import type { IconProps } from '../types';

export const IconCheckmark: FC<IconProps> = ({ title, className }) => {
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
            <path
                fill="currentColor"
                d="M5.6 9.6 2.753 6.754a.5.5 0 0 0-.707 0L.353 8.446a.5.5 0 0 0 0 .708l4.893 4.893a.5.5 0 0 0 .707 0l9.693-9.693a.5.5 0 0 0 0-.708l-1.693-1.692a.5.5 0 0 0-.707 0L5.6 9.6Z"
            />
        </svg>
    );
};
