import clsx from 'clsx';
import { HeadlineProps } from './types';

export const Heading = ({ text, size, color }: HeadlineProps) => {
    switch (size) {
        case 'h1':
            return <h1 className={clsx(color, 'font-poppins font-semibold', '')}>{text}</h1>;
        case 'h2':
            return <h2 className={clsx(color, 'font-poppins font-semibold', '')}>{text}</h2>;
        case 'h3':
            return <h3 className={clsx(color, 'font-poppins font-semibold', '')}>{text}</h3>;
        case 'h4':
            return <h4 className={clsx(color, 'font-poppins font-semibold', '')}>{text}</h4>;
        default:
            return <></>;
    }
};
