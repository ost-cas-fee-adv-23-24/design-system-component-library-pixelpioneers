import { ButtonHTMLAttributes, Ref } from 'react';

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    fill?: boolean;
    ref?: Ref<HTMLButtonElement>;
};
