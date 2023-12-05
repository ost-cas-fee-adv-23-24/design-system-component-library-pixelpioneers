import { ButtonProps } from '../button';

export type NaviButtonProps = Omit<ButtonProps, 'ref' | 'variant' | 'fill'>;
