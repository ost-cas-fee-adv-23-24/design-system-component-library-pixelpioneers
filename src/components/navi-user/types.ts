import { BaseButtonProps } from '../../base/base-button/types';

export type NaviUserProps = Omit<BaseButtonProps, 'children' | 'fill' | 'className'> & {
    avatarSrc?: string;
    avatarAlt?: string;
};
