import { FC, useState } from 'react';
import { LikeButtonProps } from './types';
import { InteractiveButton } from './interactive-button';
import { IconHeart, IconHeartFilled } from '../../elements';
import clsx from 'clsx';
import { generateLabel } from '../../utlis/helpers';
import { defaultLikeContext } from '../../utlis/context';

export const LikeButton: FC<LikeButtonProps> = ({
    onClick,
    isLiked,
    name = 'like-button',
    amount = 0,
    label = {
        zero: 'Like',
        singular: 'Like',
        plural: 'Likes',
        pastParticiple: 'Liked',
    },
    disabled = false,
}) => {
    const [{ actualAmount, isLikedNow, justLiked }, setState] = useState(
        defaultLikeContext(amount, isLiked),
    );

    const hasAnyLike = actualAmount > 0;
    const computedLabel = justLiked ? label.pastParticiple : generateLabel(actualAmount, label);

    const LikeButtonClasses = clsx(
        'hover:bg-tertiary-50 hover:fill-tertiary-600 hover:text-tertiary-600',
        hasAnyLike
            ? `fill-tertiary-600 text-tertiary-900 duration-300 ${
                  justLiked ? 'ease-out' : 'ease-in-out'
              }`
            : 'fill-secondary-600 text-secondary-600 duration-350 ease-in-out',
    );
    return (
        <InteractiveButton
            Icon={isLikedNow ? IconHeartFilled : IconHeart}
            label={computedLabel}
            onClick={() => {
                onClick();
                if (!isLikedNow) {
                    setState({ isLikedNow: true, actualAmount: actualAmount + 1, justLiked: true });
                    setTimeout(() => {
                        setState((prevState) => ({ ...prevState, justLiked: false }));
                    }, 2000);
                } else {
                    setState((prevState) => ({
                        ...prevState,
                        isLikedNow: false,
                        actualAmount: actualAmount - 1,
                    }));
                }
            }}
            name={name}
            disabled={disabled}
            className={LikeButtonClasses}
        />
    );
};
