import { ChangeEvent, ComponentType } from 'react';
import { IconProps } from '../../../elements';
import { TextStatusVariant } from '../field-hint';

export interface InputProps {
    placeholder: string;
    label: string;
    name: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type: InputType;
    Icon?: ComponentType<IconProps>;
    isOnChangeValid?: string | null;
    hintText?: string;
    errorText?: string | null;
    hintName?: string;
    status?: TextStatusVariant;
}

export enum InputType {
    TEXT = 'text',
    PASSWORD = 'password',
    EMAIL = 'email',
}
