import { FC } from 'react';
import clsx from 'clsx';
import { FieldHintProps, TextStatusVariant } from './types';

export const FieldHint: FC<FieldHintProps> = ({ hintName, hintText, errorText, status }) => {
    if (!hintText && !errorText) return null;

    return (
        <div
            className={clsx('flex justify-between gap-xs text-xs', errorText && 'flex-row-reverse')}
        >
            {hintText && status === TextStatusVariant.HINT && (
                <span id={`${hintName}-hint`} className="text-secondary-400">
                    {hintText}
                </span>
            )}
            {errorText && status === TextStatusVariant.ERROR && (
                <span id={`${hintName}-error`} className="text-error" role="alert">
                    {errorText}
                </span>
            )}
        </div>
    );
};
