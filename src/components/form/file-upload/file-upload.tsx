import { FC, DragEvent, useState, useRef, useId, ChangeEvent } from 'react';
import { FileUploadProps } from './types';
import { LabelSize } from '../../typography/label/types';
import { Label } from '../../typography/label/label';
import clsx from 'clsx';
import { IconSize, IconUpload } from '../../../elements/icons';
import { Button } from '../../button/button';
import { ButtonSize } from '../../button/types';
import { Variant } from '../../../utlis/types';

export const FileUpload: FC<FileUploadProps> = ({
    label = '',
    labelFileSize = '',
    labelButton = '',
    Icon,
    IconActionLeft,
    IconActionRight,
    onLoadFile,
}) => {
    const fileInputId = useId();
    const inputReference = useRef<HTMLInputElement>(null);
    const [dragIsOver, setDragIsOver] = useState(false);
    const [isValidFileType, setIsValidFileType] = useState(true);
    const [isValidFileSize, setIsValidFileSize] = useState(true);

    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragIsOver(true);
    };

    const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragIsOver(false);
    };

    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragIsOver(false);

        // Fetch the file
        const droppedFile = event.dataTransfer.files[0];
        console.log('Drop ', droppedFile);
        onLoadFile && onLoadFile(droppedFile);

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
            setIsValidFileType(true);
        } else if (type === 'image/jpeg') {
            setIsValidFileType(true);
        } else {
            setIsValidFileType(false);
        }
    };

    const checkFileSize = (size: number): void => {
        // File Size must be less than 5 MB
        return size <= 52428800 ? setIsValidFileSize(true) : setIsValidFileSize(false);
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
                    dragIsOver ? 'bg-secondary-200' : 'bg-secondary-100',
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
                    text={label}
                    size={LabelSize.L}
                    className={`mb-xs ${
                        isValidFileType && isValidFileSize ? 'text-secondary-500' : 'text-error'
                    }`}
                />
                <Label
                    text={labelFileSize}
                    size={LabelSize.M}
                    className={`mb-xs ${
                        isValidFileType && isValidFileSize ? 'text-secondary-500' : 'text-error'
                    }`}
                />
            </section>
            <input
                className="hidden"
                type="file"
                ref={inputReference}
                id={fileInputId}
                multiple={false}
                onChange={handleChange}
            />
            <section className="my-xs">
                {labelButton && (
                    <Button
                        size={ButtonSize.M}
                        variant={Variant.SECONDARY}
                        onClick={onFileUpload}
                        label={labelButton}
                        Icon={Icon}
                    />
                )}
            </section>
            <section className="flex w-full justify-between">
                <div>
                    <Button
                        size={ButtonSize.M}
                        variant={Variant.SECONDARY}
                        onClick={() => {}}
                        label="Abbrechen"
                        Icon={IconActionLeft}
                    />
                </div>
                <div>
                    <Button
                        size={ButtonSize.M}
                        onClick={() => {}}
                        label="Speichern"
                        Icon={IconActionRight}
                        disabled={!isValidFileType && !isValidFileSize}
                    />
                </div>
            </section>
        </div>
    );
};
