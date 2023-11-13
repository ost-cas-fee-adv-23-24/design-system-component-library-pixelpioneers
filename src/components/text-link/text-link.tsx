import React, { FC } from 'react';
import { TextLinkProps } from './types';
import clsx from 'clsx';
import { Label, LabelSize } from '../typography';
import { BaseButton } from '../../base/base-button/base-button';

export const TextLink: FC<TextLinkProps> = ({
    label,
    onClick,
    name = 'text-link',
    disabled = false,
}) => {
    // TODO: ANIMATION
    const buttonClasses = 'text-primary-600 text-underline';
    const transitionClasses = '';
    return (
        <BaseButton
            name={name}
            onClick={onClick}
            className={clsx(buttonClasses, transitionClasses)}
            disabled={disabled}
        >
            <Label text={label} size={LabelSize.S} />
        </BaseButton>
    );
};
