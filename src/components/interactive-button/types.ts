import { ButtonHTMLAttributes } from 'react';
import { Wording, WordingExtended } from '../../utlis';

export type ShareButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & {
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

export type CommentButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * Amount of comments
     */
    amount?: number;
    /**
     * Label consists of word/sentence in multiple forms
     */
    label?: Wording;
};

export type LikeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
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

export interface LikeContext {
    actualAmount: number;
    isLikedNow: boolean;
    justLiked: boolean;
}
