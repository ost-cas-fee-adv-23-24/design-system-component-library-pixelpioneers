'use client';
import type { FC } from 'react';
import { type IconProps, IconSize } from '../types';

export const IconSettingsAnimated: FC<IconProps> = ({ title, className, size = IconSize.M }) => (
    <div className="transform-none transition duration-1000 group-hover:rotate-180">
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
                <path d="M15.135 6.784a2 2 0 0 1-1.23-2.969c.322-.536.225-.998-.094-1.316l-.31-.31c-.318-.318-.78-.415-1.316-.094A2 2 0 0 1 9.216.865C9.065.258 8.669 0 8.219 0h-.438c-.45 0-.845.258-.997.865a2 2 0 0 1-2.969 1.23c-.536-.322-.999-.225-1.317.093l-.31.31c-.318.318-.415.781-.093 1.317a2 2 0 0 1-1.23 2.969C.26 6.935 0 7.33 0 7.781v.438c0 .45.258.845.865.997a2 2 0 0 1 1.23 2.969c-.322.536-.225.998.094 1.316l.31.31c.319.319.782.415 1.316.094a2 2 0 0 1 2.969 1.23c.151.607.547.865.997.865h.438c.45 0 .845-.258.997-.865a2 2 0 0 1 2.969-1.23c.535.321.997.225 1.316-.094l.31-.31c.318-.318.415-.78.094-1.316a2 2 0 0 1 1.23-2.969c.607-.151.865-.547.865-.997v-.438c0-.451-.26-.846-.865-.997ZM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </g>
            <defs>
                <clipPath id="a">
                    <path d="M0 0h16v16H0z" />
                </clipPath>
            </defs>
        </svg>
    </div>
);
