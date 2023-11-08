import clsx from 'clsx';
import { HeadlineProps } from './types';

export const Heading = ({ text, size, color }: HeadlineProps) => {
    const fontClasses = 'font-default';
    switch (size) {
        case 'h1':
            return <h1 className={clsx(fontClasses, '', color)}>{text}</h1>;
        case 'h2':
            return <h2 className={clsx(fontClasses, '', color)}>{text}</h2>;
        case 'h3':
            return <h3 className={clsx(fontClasses, '', color)}>{text}</h3>;
        case 'h4':
            return <h4 className={clsx(fontClasses, '', color)}>{text}</h4>;
        default:
            return <></>;
    }
};
