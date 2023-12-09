import { FC, forwardRef, useState } from 'react';
import { InputProps, InputType } from './types';
import { Label, LabelSize } from '../../typography';
import { IconSize } from '../../../elements';
import { Hint } from '../hint';
import clsx from 'clsx';

export const Input: FC<InputProps> = forwardRef(
    (
        {
            id,
            placeholder,
            label,
            name,
            value,
            onChange,
            type,
            Icon,
            iconLabel,
            isOnChangeValid = null,
            hintText,
            errorText,
            hintName,
            status,
            className,
            ...props
        },
        ref,
    ) => {
        const [isPrivacy, setIsPrivacy] = useState(false);
        const inputWrapperClasses = 'relative flex flex-col w-full h-fit wrap-input';
        const inputClasses = clsx(
            'pr-10 h-xl w-full rounded-s px-s py-s text-secondary-700 placeholder-secondary-300 focus:outline-2 focus:outline-primary-600',
            Icon && 'pl-s pr-xl',
            className,
        );
        const iconClasses = 'cursor-pointer absolute flex items-center right-s top-0 h-full';

        return (
            <div className={inputWrapperClasses}>
                <Label
                    id={`label-${id}`}
                    size={LabelSize.M}
                    className="text-secondary-700"
                    htmlFor={id}
                >
                    {label}
                </Label>
                <div
                    className={`relative flex items-center justify-end rounded-s border transition-all duration-300 ease-in-out hover:border-primary-600 ${
                        isOnChangeValid ? 'border-2 border-error' : 'border-secondary-200'
                    }`}
                >
                    <input
                        id={id}
                        ref={ref}
                        name={name}
                        className={inputClasses}
                        type={isPrivacy ? InputType.TEXT : type}
                        placeholder={placeholder}
                        onChange={onChange}
                        value={value}
                        spellCheck={type === InputType.PASSWORD ? 'false' : 'true'}
                        {...props}
                    />
                    {Icon && (
                        <button
                            type="button"
                            className={iconClasses}
                            aria-label={
                                InputType.PASSWORD
                                    ? isPrivacy
                                        ? 'Hide password'
                                        : 'Show password'
                                    : iconLabel
                            }
                            onClick={() => setIsPrivacy(!isPrivacy)}
                        >
                            {Icon && InputType.PASSWORD && !isOnChangeValid ? (
                                <Icon
                                    size={IconSize.M}
                                    className={
                                        isPrivacy ? 'fill-primary-600' : 'fill-secondary-600'
                                    }
                                />
                            ) : (
                                <Icon size={IconSize.M} className="fill-error" />
                            )}
                        </button>
                    )}
                </div>
                {hintName && status && (hintText || errorText) && (
                    <Hint aria-labelledby={`label-${id}`} status={status}>
                        {errorText || hintText}
                    </Hint>
                )}
            </div>
        );
    },
);
