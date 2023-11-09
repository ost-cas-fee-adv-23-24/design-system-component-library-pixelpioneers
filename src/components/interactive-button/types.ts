import { ComponentType } from 'react';
import { IconProps } from '../../elements';

export interface InteractiveButtonProps {
    label: string;
    onClick: () => void;
    Icon?: ComponentType<IconProps>;
    isActive?: boolean;
    disabled?: boolean;
    name?: string;
    className?: string;
}

export interface ShareButtonProps {
    /**
     * Link to share / copy to clipboard
     */
    link: string;
    disabled?: boolean;
    name?: string;
    label?: string;
    /**
     * Label when link is copied to clipboard
     */
    labelShared?: string;
}

export interface CommentButtonProps {
    onClick: () => void;
    /**
     * Amount of comments
     */
    amount?: number;
    disabled?: boolean;
    name?: string;
    label?: Wording;
}

export interface Wording {
    zero: string;
    singular: string;
    plural: string;
}
