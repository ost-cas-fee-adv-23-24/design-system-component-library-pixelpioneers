import { FC, useState } from 'react';
import { LikeButtonProps } from './types';
import { InteractiveButton } from './interactive-button';
import { IconHeart, IconHeartFilled } from '../../elements';
import clsx from 'clsx';
import { generateLabel } from '../../utlis/helpers';

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
    const [actualAmount, setActualAmount] = useState(amount);
    const [isLikedNow, setIsLikedNow] = useState(isLiked);
    const [justLiked, setJustLiked] = useState(false);
    const hasAnyLike = actualAmount > 0;
    const computedLabel = justLiked ? label.pastParticiple : generateLabel(actualAmount, label);

    const LikeButtonClasses = clsx(
        'hover:bg-tertiary-50 hover:fill-tertiary-600 hover:text-tertiary-600',
        hasAnyLike
            ? 'fill-tertiary-600 text-tertiary-900 duration-300 ease-out'
            : 'fill-secondary-600 text-secondary-600 duration-350 ease-in-out',
    );
    return (
        <InteractiveButton
            Icon={isLikedNow ? IconHeartFilled : IconHeart}
            label={computedLabel}
            onClick={() => {
                onClick();
                if (!isLikedNow) {
                    setIsLikedNow(true);
                    setActualAmount(actualAmount + 1);

                    setJustLiked(true);
                    setTimeout(() => {
                        setJustLiked(false);
                    }, 2000);
                } else {
                    setIsLikedNow(false);
                    setActualAmount(actualAmount - 1);
                }
            }}
            name={name}
            disabled={disabled}
            className={LikeButtonClasses}
        />
    );
};
