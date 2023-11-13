import React, { FC } from 'react';
import { IconLinkProps } from './types';
import clsx from 'clsx';
import { IconSize } from '../../elements';
import { Label, LabelSize } from '../typography';
import { BaseButton } from '../../base/base-button/base-button';
import { Variant } from '../../utlis';

export const IconLink: FC<IconLinkProps> = ({
    label,
    Icon,
    variant = Variant.PRIMARY,
    onClick,
    name = 'icon-link',
    disabled = false,
}) => {
    const buttonClasses = clsx(
        'gap-2xs',
        {
            primary:
                'fill-primary-600 text-primary-600 hover:fill-primary-900 hover:text-primary-900',
            secondary:
                'fill-secondary-400 text-secondary-400 hover:fill-secondary-600 hover:text-secondary-600',
            tertiary:
                'fill-tertiary-600 text-tertiary-600 hover:fill-tertiary-900 hover:text-tertiary-900',
        }[variant],
    );
    const transitionClasses = 'transition-all duration-350 ease-in-out';
    return (
        <BaseButton
            name={name}
            onClick={onClick}
            className={clsx(buttonClasses, transitionClasses)}
            disabled={disabled}
        >
            <Icon size={IconSize.S} className={'self-center'} />
            <Label text={label} size={LabelSize.S} />
        </BaseButton>
    );
};