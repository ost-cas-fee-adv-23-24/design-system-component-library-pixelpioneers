import React, { FC } from 'react';
import { IconLinkProps } from './types';
import clsx from 'clsx';
import { IconSize } from '../../elements';
import { Label, LabelSize } from '../typography';

export const IconLink: FC<IconLinkProps> = ({
    label,
    Icon,
    //variant = Variant.PRIMARY,
    //onClick,
    //name,
    className = '',
    //disabled = false,
}) => {
    const buttonClasses = '';
    const iconClasses = 'self-center';
    return (
        <button className={clsx(buttonClasses, className)}>
            {Icon && <Icon size={IconSize.S} className={clsx(iconClasses)} />}
            <Label text={label} size={LabelSize.S} />
        </button>
    );
};
