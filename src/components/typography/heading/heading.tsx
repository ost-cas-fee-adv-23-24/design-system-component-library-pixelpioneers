import clsx from 'clsx';
import { HeadingProps, HeadingSize } from './types';
import { FC } from 'react';

export const Heading: FC<HeadingProps> = ({ text, size, className = 'text-inherit' }) => {
    const fontClasses = 'font-default leading-s';
    switch (size) {
        case HeadingSize.H1:
            return <h1 className={clsx(fontClasses, 'text-4xl font-bold', className)}>{text}</h1>;
        case HeadingSize.H2:
            return <h2 className={clsx(fontClasses, 'text-3xl font-bold', className)}>{text}</h2>;
        case HeadingSize.H3:
            return (
                <h3 className={clsx(fontClasses, 'text-2xl font-semibold', className)}>{text}</h3>
            );
        case HeadingSize.H4:
            return (
                <h4 className={clsx(fontClasses, 'text-xl font-semibold', className)}>{text}</h4>
            );
        default:
            return <></>;
    }
};
