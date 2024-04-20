'use client';

import { ChangeEvent, DragEvent, FC, useCallback, useId, useRef, useState } from 'react';
import { FileUploadProps } from './types';
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
    const [isImage, setIsImage] = useState<string | undefined>(undefined);
    const [isPreviewImage, setIsPreviewImage] = useState<File | undefined>(undefined);
    const [isValid, setIsValid] = useState<boolean | undefined>(true);
    const [isDragging, setIsDragging] = useState<boolean>(false);

    const validateFile = useCallback(
        (file: File): boolean => {
            const isValidType = ['image/png', 'image/jpeg'].includes(file.type);
            const isValidSize = file.size <= maxFileSizeUpload;
            return isValidType && isValidSize;
        },
        [maxFileSizeUpload],
    );

    const handleDragOver = (event: DragEvent<HTMLDivElement>): boolean => {
        event.preventDefault();
        setIsDragging(true);
        return true;
    };

    const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(false);
        return false;
    };

    const handleDrop = useCallback(
        (event: DragEvent<HTMLDivElement>) => {
            handleDragLeave(event);

            const droppedFile = event.dataTransfer.files[0];
            if (droppedFile && validateFile(droppedFile)) {
                onLoadFile?.(droppedFile);
                setIsPreviewImage(droppedFile);
                const reader = new FileReader();
                reader.onloadend = () => {
                    setIsImage(reader.result as string);
                };
                reader.readAsDataURL(droppedFile);
                setIsValid(true);
            } else {
                setIsPreviewImage(undefined);
                setIsImage(undefined);
                setIsValid(false);
            }
        },
        [onLoadFile, validateFile],
    );

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            event.preventDefault();
            const file = event.target.files?.[0];
            if (file && validateFile(file)) {
                onLoadFile?.(file);
                setIsPreviewImage(file);
                const reader = new FileReader();
                reader.onloadend = () => {
                    setIsImage(reader.result as string);
                };
                reader.readAsDataURL(file);
                setIsValid(true);
            } else {
                setIsPreviewImage(undefined);
                setIsImage(undefined);
                setIsValid(false);
            }
        },
        [onLoadFile, validateFile],
    );

    const onFileUpload = () => {
        inputReference.current?.click();
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
                    isImage ? 'p-0' : 'p-xs',
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
                {!isPreviewImage && (
                    <>
                        <IconUpload
                            size={IconSize.L}
                            className={`mb-xs ${isValid ? 'fill-secondary-500' : 'fill-error'}`}
                        />
                        <Label
                            htmlFor={fileInputId}
                            size={LabelSize.XL}
                            className={`mb-xs ${isValid ? 'text-secondary-500' : 'text-error'}`}
                        >
                            {label}
                        </Label>
                        <Paragraph
                            size={ParagraphSize.M}
                            className={isValid ? 'text-secondary-400' : 'text-error'}
                        >
                            {labelFileSize}
                        </Paragraph>
                    </>
                )}
                {isPreviewImage && (
                    <section className="relative flex h-auto w-full flex-row justify-center">
                        <img
                            className="rounded-s object-cover md:h-[194px] md:w-[430px]"
                            src={isImage}
                        />
                    </section>
                )}
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
