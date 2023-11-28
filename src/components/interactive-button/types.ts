import { Wording, WordingExtended } from '../../utlis';
import { BaseButtonProps } from '../../base/base-button/types';

export type InteractiveButtonProps<T> = Omit<BaseButtonProps, 'children'> & {
    /**
     * Label on Button
     */
    label: T;
};

export type ShareButtonProps = Omit<InteractiveButtonProps<string>, 'onClick'> & {
    /**
     * Link to share / copy to clipboard
     */
    link: string;
    /**
     * Label when link is copied to clipboard
     */
    labelShared?: string;
};

export type CommentButtonProps = Partial<InteractiveButtonProps<Wording>> & {
    /**
     * Amount of comments
     */
    amount?: number;
};

export type LikeButtonProps = Partial<InteractiveButtonProps<WordingExtended>> & {
    /**
     * Is picture liked by user
     */
    isLiked: boolean;
    /**
     * Amount of likes
     */
    amount?: number;
};

export type LikeContext = {
    actualAmount: number;
    isLikedNow: boolean;
    justLiked: boolean;
};
