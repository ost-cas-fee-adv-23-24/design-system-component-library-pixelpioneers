import { MutableRefObject } from 'react';

export interface ModalSettingsTemplateProps {
    formClasses: string;
    labelClasses: string;
    initialFocusInputRef?: MutableRefObject<HTMLInputElement | null>;
}
