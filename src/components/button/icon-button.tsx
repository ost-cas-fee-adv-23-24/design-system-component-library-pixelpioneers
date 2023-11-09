import { ButtonSize, IconButtonProps } from './types';
import { Button } from './button';
import { Variant } from '../../utlis';
import { FC } from 'react';

export const IconButton: FC<IconButtonProps> = ({ Icon, onClick, disabled, name }) => (
    <Button
        Icon={Icon}
        size={ButtonSize.L}
        disabled={disabled}
        onClick={onClick}
        variant={Variant.SECONDARY}
        name={name}
    />
);
