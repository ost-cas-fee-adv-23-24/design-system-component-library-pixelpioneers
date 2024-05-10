import clsx from 'clsx';
import { HeadingLevel, HeadingProps } from './types';
import { createElement, FC, HTMLAttributes } from 'react';

export const Heading: FC<HeadingProps> = ({
    children,
    variant = HeadingLevel.H1,
    className = 'text-inherit',
    ...props
}) => {
    const headingClasses = clsx(
        className,
        `break-words break-all leading-s`,
        {
            h1: `text-4xl font-bold`,
            h2: `text-3xl font-bold`,
            h3: `text-2xl font-semibold`,
            h4: `text-xl font-semibold`,
        }[variant],
    );

    const HeadingElement = ({ ...args }: HTMLAttributes<HTMLHeadingElement>) =>
        createElement(variant, args, children);

    return (
        <HeadingElement className={headingClasses} {...props}>
            {children}
        </HeadingElement>
    );
};
