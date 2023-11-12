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
    const [files, setFiles] = useState<File[]>([]);

    console.log('viaDropFile ', files);

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

        // Here we'll handle the dropped files
        console.log('dropped');
        setDragIsOver(false);

        // Fetch the files
        const droppedFiles = Array.from(event.dataTransfer.files);
        setFiles(droppedFiles);

        // Use FileReader to read file content
        droppedFiles.forEach((file) => {
            const reader = new FileReader();

            reader.onloadend = () => {
                console.log(reader.result);
            };

            reader.onerror = () => {
                console.error('There was an issue reading the file.');
            };

            reader.readAsDataURL(file);
            return reader;
        });
    };

    // Fire the input when the Button is pushed
    const onClick = () => {
        console.log('FileUpload Button is clicked!');
        inputReference.current?.click();
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        console.log('files ', files);
        if (event.target.files && event.target.files[0]) {
            setFiles([]);
            onLoadFile(event.target.files[0]);
        }
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
                <IconUpload size={IconSize.L} className="mb-xs fill-secondary-500" />
                <Label text={label} size={LabelSize.L} className="mb-xs text-secondary-500" />
                <Label text={labelFileSize} size={LabelSize.M} className="text-secondary-500" />
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
                        onClick={onClick}
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
                        onClick={onClick}
                        label="Abbrechen"
                        Icon={IconActionLeft}
                    />
                </div>
                <div>
                    <Button
                        size={ButtonSize.M}
                        onClick={onClick}
                        label="Speichern"
                        Icon={IconActionRight}
                    />
                </div>
            </section>
        </div>
    );
};
