import { FC } from 'react';
import { CommentButtonProps } from './types';
import { InteractiveButton } from './interactive-button';
import { IconReply, IconReplyFilled } from '../../elements';
import clsx from 'clsx';

export const CommentButton: FC<CommentButtonProps> = ({
    onClick,
    name = 'comment-button',
    amount = 0,
    label = {
        zero: 'Comment',
        singular: 'Comment',
        plural: 'Comments',
    },
    disabled = false,
}) => {
    const hasComment = amount > 0;
    const commentButtonClasses = clsx(
        `text-secondary-600`,
        `hover:bg-primary-50 hover:fill-primary-600 hover:text-primary-600`,
        hasComment
            ? 'fill-primary-600 duration-300 ease-out'
            : 'fill-secondary-600 duration-350 ease-in-out',
    );
    const computedLabel = hasComment
        ? `${amount} ${amount === 1 ? label.singular : label.plural}`
        : label.zero;
    return (
        <InteractiveButton
            Icon={hasComment ? IconReplyFilled : IconReply}
            label={computedLabel}
            onClick={onClick}
            name={name}
            disabled={disabled}
            className={commentButtonClasses}
        />
    );
};
