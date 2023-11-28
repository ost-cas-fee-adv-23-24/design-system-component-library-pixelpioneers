import { Wording, WordingExtended } from '../../utlis';
import { BaseButtonProps } from '../../base/base-button/types';

export type ShareButtonProps = Omit<BaseButtonProps, 'onClick' | 'children'> & {
    label: string;
    /**
     * Link to share / copy to clipboard
     */
    link: string;
    /**
     * Label when link is copied to clipboard
     */
    labelShared?: string;
};

export type CommentButtonProps = Omit<BaseButtonProps, 'children'> & {
    /**
     * Amount of comments
     */
    amount?: number;
    /**
     * Label consists of word/sentence in multiple forms
     */
    label?: Wording;
};

export type LikeButtonProps = Omit<BaseButtonProps, 'children'> & {
    /**
     * Is picture liked by user
     */
    isLiked: boolean;
    /**
     * Amount of likes
     */
    amount?: number;
    /**
     * Label consists of word/sentence in multiple forms
     */
    label?: WordingExtended;
};

export type LikeContext = {
    actualAmount: number;
    isLikedNow: boolean;
    justLiked: boolean;
};
