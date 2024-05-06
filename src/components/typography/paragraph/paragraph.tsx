import clsx from 'clsx';
import { ParagraphProps } from './types';
import { FC } from 'react';

export const Paragraph: FC<ParagraphProps> = ({
    children,
    size,
    className = 'text-inherit',
    ...props
}) => (
    <p
        className={clsx(
            'font-medium',
            {
                m: 'text-base leading-m',
                l: 'text-xl leading-l',
            }[size],
            className,
        )}
        {...props}
    >
        {children}
    </p>
);
