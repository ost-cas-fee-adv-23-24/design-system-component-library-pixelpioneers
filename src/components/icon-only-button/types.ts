import { ButtonProps } from '../button';

export type IconButtonProps = Omit<ButtonProps, 'variant' | 'label' | 'fill' | 'size'> &
    Required<Pick<ButtonProps, 'aria-label'>>;
