import { ButtonHTMLAttributes } from 'react';

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    fill?: boolean;
};
