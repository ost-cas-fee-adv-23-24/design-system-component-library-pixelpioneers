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

export type FileUploadState = {
    isDragIsOver: boolean;
    isValidFileSize: boolean;
    isValidFileType: boolean;
};

export const defaultFileUploadState: FileUploadState = {
    isDragIsOver: false,
    isValidFileSize: true,
    isValidFileType: true,
};
