import { ComponentType, InputHTMLAttributes, MutableRefObject } from 'react';
import { IconProps } from '../../../elements';
import { TextStatusVariant } from '../field-hint';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    ref?: MutableRefObject<HTMLInputElement | null>;
    label: string;
    name: string;
    type: InputType;
    Icon?: ComponentType<IconProps>;
    isOnChangeValid?: string | null;
    hintText?: string;
    errorText?: string | null;
    hintName?: string;
    status?: TextStatusVariant;
};

export enum InputType {
    TEXT = 'text',
    PASSWORD = 'password',
    EMAIL = 'email',
}
