import React, { FC } from 'react';
import { TextLinkProps } from './types';
import clsx from 'clsx';
import { Label, LabelSize, LabelType } from '../typography';

export const TextLink: FC<TextLinkProps> = ({ label, link, className, ...props }) => {
    // TODO: IMPROVE ANIMATION
    const linkClasses = clsx('flex justify-center text-primary-600', className);
    const labelClasses =
        'underline underline-offset-2 hover:underline-offset-4 hover:decoration-primary-200';
    const transitionClasses = 'transition-all duration-350';
    return (
        <a className={linkClasses} href={link} {...props}>
            <Label
                type={LabelType.SPAN}
                size={LabelSize.S}
                className={clsx(labelClasses, transitionClasses)}
            >
                {label}
            </Label>
        </a>
    );
};
