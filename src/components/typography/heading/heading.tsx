import clsx from 'clsx';
import { HeadingProps, HeadingSize } from './types';
import { FC, HTMLAttributes, createElement } from 'react';

export const Heading: FC<HeadingProps> = ({
    children,
    headingLevel,
    className = 'text-inherit',
    ...props
}) => {
    const HeadingElement = ({ ...args }: HTMLAttributes<HTMLHeadingElement>) =>
        createElement(headingLevel, args, children);
    const fontClasses = 'font-default leading-s';
    switch (headingLevel) {
        case HeadingSize.H1:
            return (
                <HeadingElement
                    className={clsx(fontClasses, 'text-4xl font-bold', className)}
                    {...props}
                >
                    {children}
                </HeadingElement>
            );
        case HeadingSize.H2:
            return (
                <HeadingElement
                    className={clsx(fontClasses, 'text-3xl font-bold', className)}
                    {...props}
                >
                    {children}
                </HeadingElement>
            );
        case HeadingSize.H3:
            return (
                <HeadingElement
                    className={clsx(fontClasses, 'text-2xl font-semibold', className)}
                    {...props}
                >
                    {children}
                </HeadingElement>
            );
        case HeadingSize.H4:
            return (
                <HeadingElement
                    className={clsx(fontClasses, 'text-xl font-semibold', className)}
                    {...props}
                >
                    {children}
                </HeadingElement>
            );
        default:
            return <></>;
    }
};
