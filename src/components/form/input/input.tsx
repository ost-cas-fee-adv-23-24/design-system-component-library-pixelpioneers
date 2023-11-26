import { FC, useState } from 'react';
import { InputProps, InputType } from './types';
import { Label, LabelSize } from '../../typography';
import { IconSize } from '../../../elements';
import { FieldHint } from '../field-hint';
import clsx from 'clsx';

export const Input: FC<InputProps> = ({
    ref,
    placeholder,
    label,
    name,
    value,
    onChange,
    type,
    Icon,
    isOnChangeValid = null,
    hintText,
    errorText,
    hintName,
    status,
    className,
    ...props
}) => {
    const [isPrivacy, setIsPrivacy] = useState(false);
    const inputWrapperClasses = 'relative w-full wrap-input';
    const inputClasses = clsx(
        'pr-10 h-xl w-full rounded-s px-s py-s text-secondary-700 placeholder-secondary-300 focus:outline-2 focus:outline-primary-600',
        className,
    );
    const iconClasses = 'cursor-pointer absolute flex items-center right-s top-0 h-full';

    return (
        <div className={inputWrapperClasses}>
            <Label
                size={LabelSize.M}
                className="text-secondary-700"
                // TODO: htmlFor={id}
            >
                {label}
            </Label>
            <div
                className={`relative flex items-center justify-end rounded-s border transition-all duration-300 ease-in-out hover:border-primary-600 ${
                    isOnChangeValid ? 'border-2 border-error' : 'border-secondary-200'
                }`}
            >
                <input
                    // TODO: id={id}
                    ref={ref}
                    name={name}
                    className={inputClasses}
                    type={isPrivacy ? InputType.TEXT : type}
                    // TODO: use Placeholder element
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    spellCheck={type === InputType.PASSWORD ? 'false' : 'true'}
                    {...props}
                />
                {Icon && (
                    <button
                        className={iconClasses}
                        aria-label={isPrivacy ? 'Hide password' : 'Show password'}
                        onClick={() => setIsPrivacy(!isPrivacy)}
                    >
                        {Icon && type === InputType.PASSWORD && isPrivacy && !isOnChangeValid ? (
                            <Icon size={IconSize.M} className="fill-primary-600" />
                        ) : !isOnChangeValid ? (
                            <Icon size={IconSize.M} className="fill-secondary-600" />
                        ) : (
                            <Icon size={IconSize.M} className="fill-error" />
                        )}
                    </button>
                )}
            </div>
            {hintName && status && (hintText || errorText) && (
                <FieldHint
                    status={status}
                    hintName={hintName}
                    errorText={errorText}
                    hintText={hintText}
                />
            )}
        </div>
    );
};
