import { FC, useState } from 'react';
import { InputProps, InputTypeProps } from './types';
import { LabelSize } from '../../typography/label/types';
import { Label } from '../../typography/label/Label';
import { IconSize } from '../../../elements';

export const Input: FC<InputProps> = ({ placeholder, label, value, onChange, type, Icon }) => {
    const [isPrivacy, setIsPrivacy] = useState(false);
    const inputWrapperClasses =
        'relative border border-secondary-200 rounded-lg transition-all duration-300 ease-in-out hover:border-primary-600';
    const inputClasses =
        'h-12 w-full text-secondary-700 rounded-lg pr-10 py-s px-s placeholder-secondary-300 focus:outline-primary-600 focus:outline-2 border-none';
    const iconClasses = 'absolute flex items-center right-s top-0 h-full';

    return (
        <div className={inputWrapperClasses}>
            <Label text={label} size={LabelSize.M} className="text-slate-700" />
            <div className="rounded-lg flex items-center justify-end border border-slate-200 hover:border-primary-600">
                <input
                    className={inputClasses}
                    type={isPrivacy ? InputTypeProps.text : type}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />
                <button
                    className={iconClasses}
                    aria-label={isPrivacy ? 'Hide password' : 'Show password'}
                    onClick={() => setIsPrivacy(!isPrivacy)}
                >
                    {Icon && <Icon size={IconSize.L} />}
                </button>
            </div>
        </div>
    );
};
