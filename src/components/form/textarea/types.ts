import { Ref, TextareaHTMLAttributes } from 'react';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    ref?: Ref<HTMLTextAreaElement>;
};
