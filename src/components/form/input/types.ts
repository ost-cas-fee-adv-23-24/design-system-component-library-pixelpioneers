import { ChangeEvent, ComponentType } from 'react';
import { IconProps } from '../../../elements';

export interface InputProps {
    placeholder: string;
    label: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type: InputTypeProps;
    Icon?: ComponentType<IconProps>;
    isOnChangeValid?: string | null;
    hintText?: string;
    errorText?: string | null;
    id?: number;
}

export enum InputTypeProps {
    text = 'text',
    password = 'password',
    email = 'email',
}
