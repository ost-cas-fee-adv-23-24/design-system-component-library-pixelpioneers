import { FC } from 'react';
import { CommentButtonProps } from './types';
import { IconReply, IconReplyFilled, IconSize } from '../../elements';
import clsx from 'clsx';
import { Label, LabelSize } from '../typography';
import { BaseButton } from '../../base/base-button/base-button';

export const CommentButton: FC<CommentButtonProps> = ({
    name = 'comment-button',
    className,
    amount = 0,
    label = {
        zero: 'Comment',
        singular: 'Comment',
        plural: 'Comments',
    },
    ...props
}) => {
    const hasComment = amount > 0;
    const commentButtonClasses = clsx(
        'gap-xs rounded-m px-base py-xs text-secondary-600 transition-all',
        'hover:bg-primary-50 hover:fill-primary-600 hover:text-primary-600',
        hasComment
            ? 'fill-primary-600 duration-300 ease-out'
            : 'fill-secondary-600 duration-350 ease-in-out',
        className,
    );
    const computedLabel = hasComment
        ? `${amount} ${amount === 1 ? label.singular : label.plural}`
        : label.zero;
    const iconClasses = 'self-center';
    return (
        <BaseButton className={commentButtonClasses} name={name} {...props}>
            {hasComment ? (
                <IconReplyFilled size={IconSize.M} className={iconClasses} />
            ) : (
                <IconReply size={IconSize.M} className={iconClasses} />
            )}
            <Label text={computedLabel} size={LabelSize.M} />
        </BaseButton>
    );
};
