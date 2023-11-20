import type { Meta, StoryObj } from '@storybook/react';
import { EditAvatar } from './edit-avatar';

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
    args: {},
};

export default meta;
type EditAvatarStory = StoryObj<typeof EditAvatar>;

export const Default: EditAvatarStory = {
    name: 'Edit Mode',
    args: {
        alt: 'It is me',
        src: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
    },
};

export const NoImage: EditAvatarStory = {
    name: 'No image available',
};
