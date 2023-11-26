import { FC, useEffect, useState } from 'react';
import { ShareButtonProps } from './types';
import { useCopyToClipboard } from 'react-use';
import { IconShare, IconSize } from '../../elements';
import clsx from 'clsx';
import { Label, LabelSize } from '../typography';
import { BaseButton } from '../../base/base-button/base-button';

export const ShareButton: FC<ShareButtonProps> = ({
    link,
    name = 'share-button',
    className,
    label = 'Copy Link',
    labelShared = 'Link copied',
    ...props
}) => {
    const [isCopied, setIsCopied] = useState(false);
    const [, copyToClipboard] = useCopyToClipboard();

    useEffect(() => {
        setTimeout(() => setIsCopied(false), 1000);
    }, [isCopied]);

    const onClick = () => {
        copyToClipboard(link);
        setIsCopied(true);
    };
    const shareButtonClasses = clsx(
        'gap-xs rounded-m px-base py-xs transition-all',
        'fill-secondary-600 text-secondary-600',
        'hover:bg-secondary-100 hover:fill-secondary-700 hover:text-secondary-700',
        'duration-350 ease-in-out',
        className,
    );
    return (
        <BaseButton className={shareButtonClasses} onClick={onClick} name={name} {...props}>
            <IconShare size={IconSize.M} className="self-center" />
            <Label text={isCopied ? labelShared : label} size={LabelSize.M} />
        </BaseButton>
    );
};
