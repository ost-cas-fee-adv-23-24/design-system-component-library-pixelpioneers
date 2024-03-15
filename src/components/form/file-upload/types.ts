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

type FileUploadState = {
    isDragging: boolean;
    isValidFileSize: boolean;
    isValidFileType: boolean;
};

export const defaultFileUploadState: FileUploadState = {
    isDragging: false,
    isValidFileSize: true,
    isValidFileType: true,
};
