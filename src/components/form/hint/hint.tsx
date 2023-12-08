import { FC } from 'react';
import { HintProps, HintVariant } from './types';

export const Hint: FC<HintProps> = ({ id, children, status, ...props }) => {
    const isError = status === HintVariant.ERROR;
    return (
        <span
            id={`${id}-${status}`}
            className={isError ? 'self-end text-error' : 'text-secondary-400'}
            role={isError ? 'alert' : undefined}
            {...props}
        >
            {children}
        </span>
    );
};
