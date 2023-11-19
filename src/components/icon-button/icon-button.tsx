import { Button, ButtonSize } from '../button';
import { Variant } from '../../utlis';
import { FC } from 'react';
import { IconButtonProps } from './types';

export const IconButton: FC<IconButtonProps> = ({ Icon, onClick, disabled, name, className }) => (
    <Button
        Icon={Icon}
        size={ButtonSize.L}
        disabled={disabled}
        onClick={onClick}
        variant={Variant.SECONDARY}
        name={name}
        className={className}
    />
);
