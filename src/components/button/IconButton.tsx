import { ButtonSize, ButtonVariant, IconButtonProps } from './types';
import { Button } from './Button';

export const IconButton = ({ Icon, onClick, disabled }: IconButtonProps) => (
    <Button
        Icon={Icon}
        size={ButtonSize.L}
        disabled={disabled}
        onClick={onClick}
        variant={ButtonVariant.SECONDARY}
    />
);
