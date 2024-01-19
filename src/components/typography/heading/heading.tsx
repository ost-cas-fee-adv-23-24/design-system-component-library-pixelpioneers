import clsx from 'clsx';
import { HeadingProps, HeadingSize } from './types';
import { FC, HTMLAttributes, createElement } from 'react';

export const Heading: FC<HeadingProps> = ({
    children,
    headingLevel,
    className = 'text-inherit',
    ...props
}) => {
    if (headingLevel && headingLevel === HeadingSize.H1) {
        className = clsx(className, 'text-4xl font-bold');
    } else if (headingLevel && headingLevel === HeadingSize.H2) {
        className = clsx(className, 'text-3xl font-bold');
    } else if (headingLevel && headingLevel === HeadingSize.H3) {
        className = clsx(className, 'text-2xl font-bold');
    } else if (headingLevel && headingLevel === HeadingSize.H4) {
        className = clsx(className, 'text-xl font-semibold');
    } else {
        className = clsx(className, '');
    }

    const HeadingElement = ({ ...args }: HTMLAttributes<HTMLHeadingElement>) =>
        createElement(headingLevel, args, children);
    const fontClasses = 'font-default leading-s';

    // eslint-disable-next-line react/forbid-component-props -- HeadingElement is a html element and not a component.
    return (
        <HeadingElement className={clsx(fontClasses, className)} {...props}>
            {children}
        </HeadingElement>
    );
};
