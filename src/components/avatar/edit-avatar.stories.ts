import type { Meta, StoryObj } from '@storybook/react';
import { EditAvatar } from './edit-avatar';
import { AvatarEditSize } from './types';

const meta: Meta<typeof EditAvatar> = {
    title: 'Components/Edit Avatar',
    component: EditAvatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onEdit: { action: 'clicked' },
    },
    args: {
        size: AvatarEditSize.XL,
    },
};

export default meta;
type EditAvatarStory = StoryObj<typeof EditAvatar>;

export const Default: EditAvatarStory = {
    name: 'Edit Mode XL',
    args: {
        alt: 'donald-duck-avatar',
        src: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
    },
};

export const EditModeSizeL: EditAvatarStory = {
    name: 'Edit Mode L',
    args: {
        alt: 'donald-duck-avatar',
        src: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
        size: AvatarEditSize.L,
    },
};

export const NoImage: EditAvatarStory = {
    name: 'No image available',
};
