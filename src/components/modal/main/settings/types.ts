import { MutableRefObject } from 'react';

export interface MSettingsProps {
    formClasses: string;
    labelClasses: string;
    initialFocusInputRef?: MutableRefObject<HTMLInputElement | null>;
}
