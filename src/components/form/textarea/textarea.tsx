'use client';
import { FC, ForwardedRef, forwardRef } from 'react';
import { TextareaProps } from './types';
import clsx from 'clsx';

export const Textarea: FC<TextareaProps> = forwardRef(
    ({ className, ...props }, ref: ForwardedRef<HTMLTextAreaElement>) => (
        <div className={'relative'}>
            <textarea
                ref={ref}
                className={clsx(
                    'placeholder:text-secondary-500',
                    'h-[160px] w-full',
                    'bg-secondary-100 text-lg',
                    'transition-all duration-300 ease-in-out',
                    'rounded-s p-s',
                    'resize-none',
                    'border border-secondary-200',
                    'ring-1 outline-none ring-secondary-200',
                    'hover:ring-2 hover:ring-secondary-300',
                    'focus:ring-primary-600',
                    className,
                )}
                {...props}
            />
        </div>
    ),
);
