import clsx from 'clsx';
import { LabelProps, LabelSpanProps, LabelType } from './types';
import { FC } from 'react';

export const Label: FC<LabelProps | LabelSpanProps> = ({
    type = LabelType.LABEL,
    children,
    size,
    className = 'text-inherit',
    ...props
}) => {
    const labelClasses = clsx(
        'font-default font-semibold leading-none',
        {
            s: 'text-xs',
            m: 'text-sm',
            l: 'text-lg',
            xl: 'text-xl',
        }[size],
        className,
    );

    if (type === LabelType.LABEL) {
        return (
            <label className={labelClasses} {...props}>
                {children}
            </label>
        );
    } else {
        return (
            <span className={labelClasses} {...props}>
                {children}
            </span>
        );
    }
};
