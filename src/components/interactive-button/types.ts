import { ComponentType } from 'react';
import { IconProps } from '../../elements';
import { Wording, WordingExtended } from '../../utlis';

export interface InteractiveBaseProps {
    onClick: () => void;
    label?: string;
    disabled?: boolean;
    name?: string;
}

export interface InteractiveButtonProps extends InteractiveBaseProps {
    Icon?: ComponentType<IconProps>;
    className?: string;
}

export type ShareButtonProps = InteractiveBaseProps & {
    /**
     * Link to share / copy to clipboard
     */
    link: string;
    /**
     * Label when link is copied to clipboard
     */
    labelShared?: string;
};

export type CommentButtonProps = Omit<InteractiveBaseProps, 'label'> & {
    /**
     * Amount of comments
     */
    amount?: number;
    /**
     * Label consists of word/sentence in multiple forms
     */
    label?: Wording;
};

export type LikeButtonProps = Omit<InteractiveBaseProps, 'label'> & {
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
