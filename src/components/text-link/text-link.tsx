import React, { FC } from 'react';
import { TextLinkProps } from './types';
import clsx from 'clsx';
import { Label, LabelSize } from '../typography';

export const TextLink: FC<TextLinkProps> = ({ label, link, name = 'text-link' }) => {
    // TODO: IMPROVE ANIMATION
    const linkClasses = 'flex justify-center text-primary-600';
    const labelClasses =
        'underline underline-offset-2 hover:underline-offset-4 hover:decoration-primary-200';
    const transitionClasses = 'transition-all duration-350';
    return (
        <a className={linkClasses} href={link} aria-label={name}>
            <Label
                text={label}
                size={LabelSize.S}
                className={clsx(labelClasses, transitionClasses)}
            />
        </a>
    );
};
