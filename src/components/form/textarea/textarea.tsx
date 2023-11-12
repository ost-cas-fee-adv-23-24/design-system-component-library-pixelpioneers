import { FC } from 'react';
import { TextareaProps } from './types';
import { LabelSize } from '../../typography/label/types';
import { Label } from '../../typography/label/label';
import clsx from 'clsx';

export const Textarea: FC<TextareaProps> = ({ placeholder, label, value, onChange }) => {
    const textareaWrapperClasses = 'relative';
    const textareaClasses = clsx(
        'palceholder:text-secondary-500',
        'h-full w-full',
        'bg-secondary-100 text-lg',
        'transition-all duration-300 ease-in-out',
        'rounded-s p-s',
        'resize-none',
        'border border-secondary-200',
        'ring-1 outline-none ring-secondary-200',
        'hover:ring-2 hover:ring-secondary-300',
        'focus:ring-primary-600',
    );

    return (
        <div className={textareaWrapperClasses}>
            <Label text={label} size={LabelSize.M} className="text-secondary-700" />
            <textarea
                className={textareaClasses}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};
