import { ComponentType, Ref } from 'react';
import { IconProps } from '../../../elements';

export type FileUploadProps = {
    label?: string;
    labelFileSize?: string;
    labelButton?: string;
    onLoadFile?: (file: File) => void;
    Icon: ComponentType<IconProps>;
    maxFileSizeUpload: number;
    ref?: Ref<HTMLInputElement>;
};
