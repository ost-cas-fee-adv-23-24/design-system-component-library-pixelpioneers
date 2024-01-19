import { ChangeEvent, DragEvent, FC, useId, useRef, useState } from 'react';
import { defaultFileUploadState, FileUploadProps } from './types';
import { Label, LabelSize, Paragraph, ParagraphSize } from '../../typography';
import clsx from 'clsx';
import { IconSize, IconUpload } from '../../../elements';
import { Button, ButtonSize } from '../../button';
import { Variant } from '../../../utlis';

export const FileUpload: FC<FileUploadProps> = ({
    label = '',
    labelFileSize = '',
    labelButton = '',
    Icon,
    onLoadFile,
    maxFileSizeUpload,
}) => {
    const fileInputId = useId();
    const inputReference = useRef<HTMLInputElement>(null);

    const [{ isDragging, isValidFileSize, isValidFileType }, setState] =
        useState(defaultFileUploadState);

    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setState((prevState) => ({ ...prevState, isDragging: true }));
    };

    const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setState((prevState) => ({ ...prevState, isDragging: false }));
    };

    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        handleDragLeave(event);

        // Fetch the file and check the validation
        const droppedFile = event.dataTransfer.files[0];
        droppedFile && checkFileType(droppedFile.type);
        droppedFile && checkFileSize(droppedFile.size);

        if (droppedFile && isValidFileType && isValidFileSize) {
            onLoadFile?.(droppedFile);
        }

        // Use FileReader to read file content
        const reader = new FileReader();

        reader.onloadend = () => {};

        reader.onerror = () => {
            console.error('There was an issue reading the file.');
        };

        reader.readAsDataURL(droppedFile);
    };

    // Fire the input when the Button is clicked
    const onFileUpload = () => {
        inputReference.current?.click();
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        event.target.files && checkFileType(event.target.files[0].type);
        event.target.files && checkFileSize(event.target.files[0].size);

        if (event.target.files && event.target.files[0] && isValidFileType && isValidFileSize) {
            onLoadFile?.(event.target.files[0]);
        }
    };

    const checkFileType = (type: string): void => {
        if (type === 'image/png' || type === 'image/jpeg') {
            setState((prevState) => ({ ...prevState, isValidFileType: true }));
        } else {
            setState((prevState) => ({ ...prevState, isValidFileType: false }));
        }
    };

    const checkFileSize = (size: number): void => {
        return size <= maxFileSizeUpload
            ? setState((prevState) => ({ ...prevState, isValidFileSize: true }))
            : setState((prevState) => ({ ...prevState, isValidFileSize: false }));
    };

    return (
        <div className="flex flex-col pb-s">
            <section
                className={clsx(
                    'flex',
                    'flex-col',
                    'justify-center',
                    'items-center',
                    'h-[194px]',
                    'w-full',
                    'p-xs',
                    'text-white',
                    'rounded-[12px]',
                    'border-2 border-dashed border-secondary-200',
                    'w-fit',
                    isDragging ? 'bg-secondary-200' : 'bg-secondary-100',
                )}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <IconUpload
                    size={IconSize.L}
                    className={`mb-xs ${
                        isValidFileType && isValidFileSize ? 'fill-secondary-500' : 'fill-error'
                    }`}
                />
                <Label
                    htmlFor={fileInputId}
                    size={LabelSize.XL}
                    className={`mb-xs ${
                        isValidFileType && isValidFileSize ? 'text-secondary-500' : 'text-error'
                    }`}
                >
                    {label}
                </Label>
                <Paragraph
                    size={ParagraphSize.M}
                    className={
                        isValidFileType && isValidFileSize ? 'text-secondary-400' : 'text-error'
                    }
                >
                    {labelFileSize}
                </Paragraph>
            </section>
            <input
                className="hidden"
                type="file"
                ref={inputReference}
                id={fileInputId}
                multiple={false}
                onChange={handleChange}
            />
            <section className="mt-s">
                {labelButton && (
                    <Button
                        size={ButtonSize.M}
                        variant={Variant.QUATERNARY}
                        onClick={onFileUpload}
                        label={labelButton}
                        Icon={Icon}
                        className="w-full"
                    />
                )}
            </section>
        </div>
    );
};
