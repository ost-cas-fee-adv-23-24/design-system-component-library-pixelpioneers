import { ComponentType, InputHTMLAttributes, Ref } from 'react';
import { IconProps } from '../../../elements';
import { HintVariant } from '../hint';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    ref?: Ref<HTMLInputElement>;
    label: string;
    name: string;
    type: InputType;
    Icon?: ComponentType<IconProps>;
    isOnChangeValid?: string | null;
    hintText?: string;
    errorText?: string | null;
    hintName?: string;
    status?: HintVariant;
};

export enum InputType {
    TEXT = 'text',
    PASSWORD = 'password',
    EMAIL = 'email',
}
