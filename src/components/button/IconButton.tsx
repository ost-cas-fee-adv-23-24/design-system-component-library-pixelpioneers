import { ButtonVariant, IconButtonProps } from './types';
import { Button } from './Button';

export const IconButton = ({ Icon, onClick, disabled }: IconButtonProps) => (
    <Button
        Icon={Icon}
        size="l"
        disabled={disabled}
        onClick={onClick}
        variant={ButtonVariant.SECONDARY}
    />
);
