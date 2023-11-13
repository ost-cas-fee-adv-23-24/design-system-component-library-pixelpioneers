import { FC } from 'react';
import { InteractiveButtonProps } from './types';
import clsx from 'clsx';
import { Label, LabelSize } from '../typography';
import { IconSize } from '../../elements';
import { BaseButton } from '../../base/base-button/base-button';

export const InteractiveButton: FC<InteractiveButtonProps> = ({
    label,
    Icon,
    onClick,
    disabled = false,
    name = 'interactive-button',
    className = '',
}) => (
    <BaseButton
        className={clsx('gap-xs rounded-m px-base py-xs transition-all', className)}
        onClick={onClick}
        disabled={disabled}
        name={name}
    >
        {Icon && <Icon size={IconSize.M} className="self-center" />}
        {label && <Label text={label} size={LabelSize.M} />}
    </BaseButton>
);
