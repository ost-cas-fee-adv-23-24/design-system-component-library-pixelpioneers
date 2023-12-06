import React, { FC } from 'react';
import { TextLinkProps } from './types';
import clsx from 'clsx';
import { Label, LabelSize, LabelType } from '../typography';

export const TextLink: FC<TextLinkProps> = ({ label, link, className, ...props }) => {
    const linkClasses = clsx('flex justify-center text-primary-600', className);
    const labelClasses = clsx(
        'underline underline-offset-2 hover:decoration-primary-200 hover:underline-offset-4',
        'transition-all duration-300',
    );
    return (
        <a className={linkClasses} href={link} {...props}>
            <Label type={LabelType.SPAN} size={LabelSize.S} className={labelClasses}>
                {label}
            </Label>
        </a>
    );
};
