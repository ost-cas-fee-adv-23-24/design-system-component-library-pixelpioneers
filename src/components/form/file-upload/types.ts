import { ComponentType } from 'react';
import { IconProps } from '../../../elements';

export type FileUploadProps = {
    label?: string;
    labelFileSize?: string;
    labelButton?: string;
    onLoadFile?: (file: File) => void;
    onSave: () => void;
    onCancel: () => void;
    Icon: ComponentType<IconProps>;
    IconActionLeft: ComponentType<IconProps>;
    IconActionRight: ComponentType<IconProps>;
    labelCancelButton?: string;
    labelSaveButton?: string;
    maxFileSizeUpload: number;
};

export type FileUploadContext = {
    isDragIsOver: boolean;
    isValidFileSize: boolean;
    isValidFileType: boolean;
};
