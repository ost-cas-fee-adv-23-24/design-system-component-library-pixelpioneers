import { FC, useState } from 'react';
import { defaultLikeState, LikeButtonProps } from './types';
import { IconHeart, IconHeartFilled, IconSize } from '../../elements';
import clsx from 'clsx';
import { generateLabel } from '../../utlis/helpers';
import { Label, LabelSize, LabelType } from '../typography';
import { BaseButton } from '../../base/base-button/base-button';

export const LikeButton: FC<LikeButtonProps> = ({
    onClick,
    isLiked,
    name = 'like-button',
    className,
    amount = 0,
    label = {
        zero: 'Like',
        singular: 'Like',
        plural: 'Likes',
        pastParticiple: 'Liked',
    },
    ...props
}) => {
    const [{ actualAmount, isLikedNow, justLiked }, setState] = useState(
        defaultLikeState(amount, isLiked),
    );

    const hasAnyLike = actualAmount > 0;
    const computedLabel = justLiked ? label.pastParticiple : generateLabel(actualAmount, label);

    const likeButtonClasses = clsx(
        'gap-xs rounded-m px-base py-xs transition-all',
        'hover:bg-tertiary-50 hover:fill-tertiary-600 hover:text-tertiary-600',
        hasAnyLike
            ? `fill-tertiary-600 text-tertiary-900 duration-300 ${
                  justLiked ? 'ease-out' : 'ease-in-out'
              }`
            : 'fill-secondary-600 text-secondary-600 duration-350 ease-in-out',
        className,
    );
    const iconClasses = 'self-center';
    return (
        <BaseButton
            className={likeButtonClasses}
            onClick={(e) => {
                onClick && onClick(e);
                if (!isLikedNow) {
                    /** if object is not liked, like it */
                    setState({
                        isLikedNow: true,
                        actualAmount: actualAmount + 1,
                        justLiked: true,
                    });

                    /** wait 2 seconds and then revert the justLiked flag */
                    setTimeout(() => {
                        setState((prevState) => ({ ...prevState, justLiked: false }));
                    }, 2000);
                } else {
                    /** if object is liked, remove like */
                    setState((prevState) => ({
                        ...prevState,
                        isLikedNow: false,
                        actualAmount: actualAmount - 1,
                    }));
                }
            }}
            name={name}
            {...props}
        >
            {isLikedNow ? (
                <IconHeartFilled size={IconSize.M} className={iconClasses} />
            ) : (
                <IconHeart size={IconSize.M} className={iconClasses} />
            )}
            <Label type={LabelType.SPAN} size={LabelSize.M}>
                {computedLabel}
            </Label>
        </BaseButton>
    );
};
