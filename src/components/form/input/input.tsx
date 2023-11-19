import { FC, useState } from 'react';
import { InputProps, InputTypeProps } from './types';
import { LabelSize } from '../../typography/label/types';
import { Label } from '../../typography/label/label';
import { IconSize } from '../../../elements';
import { FieldHint } from '../field-hint';

export const Input: FC<InputProps> = ({
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
}) => {
    const [isPrivacy, setIsPrivacy] = useState(false);
    const inputWrapperClasses = 'relative';
    const inputClasses =
        'h-12 w-full text-secondary-700 pr-10 py-s px-s rounded-s placeholder-secondary-300 focus:outline-primary-600 focus:outline-2';
    const iconClasses = 'cursor-pointer absolute flex items-center right-s top-0 h-full';

    return (
        <div className={inputWrapperClasses}>
            <Label text={label} size={LabelSize.M} className="text-secondary-700" />
            <div
                className={`flex items-center justify-end rounded-s border transition-all duration-300 ease-in-out hover:border-primary-600 ${
                    isOnChangeValid ? 'border-2 border-error' : 'border-secondary-200'
                }`}
            >
                <input
                    name={name}
                    className={inputClasses}
                    type={isPrivacy ? InputTypeProps.text : type}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    spellCheck={type === InputTypeProps.password ? 'false' : 'true'}
                />
                {Icon && (
                    <button
                        className={iconClasses}
                        aria-label={isPrivacy ? 'Hide password' : 'Show password'}
                        onClick={() => setIsPrivacy(!isPrivacy)}
                    >
                        {Icon &&
                        type === InputTypeProps.password &&
                        isPrivacy &&
                        !isOnChangeValid ? (
                            <Icon size={IconSize.M} className="fill-primary-600" />
                        ) : !isOnChangeValid ? (
                            <Icon size={IconSize.M} className="fill-secondary-600" />
                        ) : (
                            <Icon size={IconSize.M} className="fill-error" />
                        )}
                    </button>
                )}
            </div>
            {hintName && (hintText || errorText) && (
                <FieldHint hintName={hintName} errorText={errorText} hintText={hintText} />
            )}
        </div>
    );
};
