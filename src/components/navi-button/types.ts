import { ButtonProps } from '../button';

export type NaviButtonProps = NaviButtonExtendProps &
    Omit<ButtonProps, 'variant' | 'fill' | 'name'>;

export type NaviButtonExtendProps = {
    className?: string;
    name?: string;
};
