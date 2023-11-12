import { ChangeEvent } from 'react';

export interface TextareaProps {
    placeholder: string;
    label: string;
    name: string;
    id: string;
    ariaLabel: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    isValid?: string;
    errorMessage?: string;
    required?: string;
}
