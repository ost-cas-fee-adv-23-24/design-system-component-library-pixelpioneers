import clsx from 'clsx';
import type { FC } from 'react';
import type { IconProps } from '../types';

export const IconMumble: FC<IconProps> = ({ title, className }) => {
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
            <g fill="#475569" clipPath="url(#a)">
                <path d="M9.793 10H6.207a.5.5 0 0 0-.353.854l1.792 1.792a.5.5 0 0 0 .708 0l1.792-1.793A.5.5 0 0 0 9.793 10Z" />
                <path d="M14.807 5.371A2.962 2.962 0 0 0 16 3a3 3 0 0 0-3-3 2.96 2.96 0 0 0-2.029.806 5.866 5.866 0 0 0-5.942 0A2.96 2.96 0 0 0 3 0a3 3 0 0 0-3 3c0 .974.472 1.827 1.193 2.371C.015 7.867-.64 11.017.935 13.298 2.173 15.09 4.55 16 8 16s5.827-.91 7.065-2.702c1.575-2.28.92-5.43-.258-7.927Zm-1.387 6.79C12.577 13.381 10.754 14 8 14s-4.577-.62-5.42-1.839c-1.05-1.522-.417-3.836.055-5.079C3.085 5.89 4.808 2 8 2s4.914 3.89 5.365 5.082c.472 1.243 1.106 3.557.055 5.08Z" />
                <path d="M6.67 6.617c-.114-.442-.38-1.05-1.164-1.05-1.081 0-1.987 1.596-1.997 2.306-.01.71.473 1.483 1.07 1.483.598 0 1.123-.535 1.658-1.297.535-.762.546-.999.432-1.442ZM10.494 5.567c-.784 0-1.05.608-1.163 1.05-.114.443-.103.68.432 1.442.535.762 1.06 1.297 1.658 1.297.597 0 1.08-.772 1.07-1.483-.01-.71-.916-2.306-1.997-2.306Z" />
            </g>
            <defs>
                <clipPath id="a">
                    <path fill="#fff" d="M0 0h16v16H0z" />
                </clipPath>
            </defs>
        </svg>
    );
};
