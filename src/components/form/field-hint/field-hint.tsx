import { FC } from 'react';
import clsx from 'clsx';
import { FieldHintProps } from './types';

export const FieldHint: FC<FieldHintProps> = ({ id, hintText, errorText }) => {
    if (!hintText && !errorText) return null;

    return (
        <div
            className={clsx('flex justify-between gap-xs text-xs', errorText && 'flex-row-reverse')}
        >
            {hintText && !errorText ? (
                <span id={`${id}-hint`} className="text-secondary-400" role="hint">
                    {hintText}
                </span>
            ) : (
                <span id={`${id}-error`} className="text-error" role="alert">
                    {errorText}
                </span>
            )}
        </div>
    );
};
