import { BaseButtonProps } from '../../base/base-button/types';

export type NaviUserProps = Omit<BaseButtonProps, 'children' | 'ref' | 'fill'> & {
    avatarSrc?: string;
    avatarAlt?: string;
};
