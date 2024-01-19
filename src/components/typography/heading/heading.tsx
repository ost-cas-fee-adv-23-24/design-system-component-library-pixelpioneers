import clsx from 'clsx';
import { HeadingProps, HeadingLevel } from './types';
import { FC, HTMLAttributes, createElement } from 'react';

export const Heading: FC<HeadingProps> = ({
    children,
    variant = HeadingLevel.H1,
    className = 'text-inherit',
    ...props
}) => {
    const headingClasses = clsx(
        className,
        `font-default leading-s`,
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
