import { ChangeEvent, DragEvent, FC, useId, useRef, useState } from 'react';
import { FileUploadProps } from './types';
import { LabelSize } from '../../typography/label/types';
import { Label } from '../../typography/label/label';
import clsx from 'clsx';
import { IconSize, IconUpload } from '../../../elements/icons';
import { Button } from '../../button/button';
import { ButtonSize } from '../../button/types';
import { Variant } from '../../../utlis/types';
import { defaultObserveFileUploadContext } from '../../../utlis/context';
import { Paragraph, ParagraphSize } from '../../typography/paragraph';

export const FileUpload: FC<FileUploadProps> = ({
    label = '',
    labelFileSize = '',
    labelButton = '',
    Icon,
    IconActionLeft,
    IconActionRight,
    onLoadFile,
    onSave,
    onCancel,
    labelCancelButton = '',
    labelSaveButton = '',
    maxFileSizeUpload,
}) => {
    const fileInputId = useId();
    const inputReference = useRef<HTMLInputElement>(null);

    const [{ isDragIsOver, isValidFileSize, isValidFileType }, setState] = useState(
        defaultObserveFileUploadContext(),
    );

    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setState((prevState) => ({ ...prevState, isDragIsOver: true }));
    };

    const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setState((prevState) => ({ ...prevState, isDragIsOver: false }));
    };

    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setState((prevState) => ({ ...prevState, isDragIsOver: false }));

        // Fetch the file and check the validation
        const droppedFile = event.dataTransfer.files[0];
        droppedFile && checkFileType(droppedFile.type);
        droppedFile && checkFileSize(droppedFile.size);

        if (droppedFile && isValidFileType && isValidFileSize) {
            onLoadFile && onLoadFile(droppedFile);
        }

        // Use FileReader to read file content
        const reader = new FileReader();

        reader.onloadend = () => {
            console.log(reader.result);
        };

        reader.onerror = () => {
            console.error('There was an issue reading the file.');
        };

        reader.readAsDataURL(droppedFile);
        console.log('reader', reader);
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
            onLoadFile && onLoadFile(event.target.files[0]);
        }
    };

    const checkFileType = (type: string): void => {
        if (type === 'image/png') {
            setState((prevState) => ({ ...prevState, isValidFileType: true }));
        } else if (type === 'image/jpeg') {
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
        <div>
            <section
                className={clsx(
                    'flex',
                    'flex-col',
                    'justify-center',
                    'items-center',
                    'h-[200px]',
                    'w-full',
                    'p-xs',
                    'text-white',
                    'rounded-s',
                    'border-2 border-secondary-200',
                    isDragIsOver ? 'bg-secondary-200' : 'bg-secondary-100',
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
                    size={LabelSize.XL}
                    className={`mb-xs ${
                        isValidFileType && isValidFileSize ? 'text-secondary-500' : 'text-error'
                    }`}
                    // TODO: htmlFor
                >
                    {label}
                </Label>
                <Paragraph
                    size={ParagraphSize.M}
                    className={
                        isValidFileType && isValidFileSize ? 'text-secondary-500' : 'text-error'
                    }
                >
                    {labelFileSize}
                </Paragraph>
            </section>
            // TODO: use ours (if possible)
            <input
                className="hidden"
                type="file"
                ref={inputReference}
                id={fileInputId}
                multiple={false}
                onChange={handleChange}
            />
            <section className="mb-xl mt-s">
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
            <section className="flex w-full flex-row justify-between gap-x-s">
                <Button
                    size={ButtonSize.M}
                    variant={Variant.SECONDARY}
                    onClick={onSave}
                    label={labelCancelButton}
                    Icon={IconActionLeft}
                    className="basis-1/2"
                />
                <Button
                    size={ButtonSize.M}
                    onClick={onCancel}
                    label={labelSaveButton}
                    Icon={IconActionRight}
                    disabled={!isValidFileType && !isValidFileSize}
                    className="basis-1/2"
                />
            </section>
        </div>
    );
};
