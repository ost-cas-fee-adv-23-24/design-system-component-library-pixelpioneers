import { ButtonSize, IconButtonProps } from './types';
import { Button } from './button';
import { Variant } from '../../utlis';
import { FC } from 'react';

export const IconButton: FC<IconButtonProps> = ({
    Icon,
    onClick,
    disabled,
    name,
    size = ButtonSize.L,
}) => (
    <Button
        Icon={Icon}
        size={size}
        disabled={disabled}
        onClick={onClick}
        variant={Variant.SECONDARY}
        name={name}
    />
);
