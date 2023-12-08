import { ComponentType } from 'react';
import { IconProps } from '../../../elements';

export type FileUploadProps = {
    label?: string;
    labelFileSize?: string;
    labelButton?: string;
    onLoadFile?: (file: File) => void;
    Icon: ComponentType<IconProps>;
    maxFileSizeUpload: number;
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
