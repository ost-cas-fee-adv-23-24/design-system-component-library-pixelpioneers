import type { Meta, StoryObj } from '@storybook/react';
import { NaviUser } from './navi-user';

const meta: Meta<typeof NaviUser> = {
    title: 'Components/Navi User',
    component: NaviUser,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
    },
    args: {},
};

export default meta;
type NaviUserStory = StoryObj<typeof NaviUser>;

export const Default: NaviUserStory = {
    name: 'Navi User with image',
    args: {
        avatarAlt: 'avatar',
        avatarSrc: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
    },
};

export const NoImage: NaviUserStory = {
    name: 'Navi User without image',
    args: {},
};
