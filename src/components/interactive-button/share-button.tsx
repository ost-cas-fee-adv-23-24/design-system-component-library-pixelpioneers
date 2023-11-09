import { FC, useEffect, useState } from 'react';
import { ShareButtonProps } from './types';
import { InteractiveButton } from './interactive-button';
import { useCopyToClipboard } from 'react-use';
import { IconShare } from '../../elements';
import clsx from 'clsx';

export const ShareButton: FC<ShareButtonProps> = ({
    link,
    name = 'share-button',
    label = 'Copy Link',
    labelShared = 'Link copied',
    disabled = false,
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
        `fill-secondary-600 text-secondary-600`,
        `hover:bg-secondary-100 hover:fill-secondary-700 hover:text-secondary-700`,
        `duration-350 ease-in-out`,
    );
    return (
        <InteractiveButton
            Icon={IconShare}
            label={isCopied ? labelShared : label}
            onClick={onClick}
            name={name}
            disabled={disabled}
            className={shareButtonClasses}
        />
    );
};
