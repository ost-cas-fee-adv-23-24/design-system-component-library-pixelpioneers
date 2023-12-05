import { FC, forwardRef } from 'react';
import { BaseButtonProps } from './types';
import clsx from 'clsx';

/** base button used for design system buttons */
export const BaseButton: FC<BaseButtonProps> = forwardRef<HTMLButtonElement, BaseButtonProps>(
    ({ className, fill, children, ...props }, ref) => (
        <button
            className={clsx(
                'flex justify-center',
                fill && 'w-full',
                className,
                'disabled:cursor-not-allowed disabled:bg-secondary-400',
            )}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    ),
);
