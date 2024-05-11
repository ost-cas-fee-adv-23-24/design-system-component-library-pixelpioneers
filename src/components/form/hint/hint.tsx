import { FC } from 'react';
import { HintProps, HintVariant } from './types';
import clsx from 'clsx';

export const Hint: FC<HintProps> = ({ id, children, status, ...props }) => {
    const isError = status === HintVariant.ERROR;
    return (
        <span
            id={`${id}-${status}`}
            className={clsx('gap-xs text-xs',
                isError ? 'self-end text-error' : 'text-secondary-400')}
            role={isError ? 'alert' : undefined}
            {...props}
        >
            {children}
        </span>
    );
};
