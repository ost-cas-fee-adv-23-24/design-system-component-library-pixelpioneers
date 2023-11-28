import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './avatar';
import { AvatarSize } from './types';

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=8862-666&mode=design&t=72He1MwyRjB5KpiV-0',
        },
    },
    tags: ['autodocs'],
    argTypes: {
        size: AvatarSize,
    },
    args: {
        size: AvatarSize.S,
    },
};

export default meta;
type AvatarStory = StoryObj<typeof Avatar>;

export const Default: AvatarStory = {
    name: 'Avatar Default',
    args: {
        alt: 'It is me',
        src: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
        size: AvatarSize.S,
    },
};

export const ImageSizeS: AvatarStory = {
    name: 'Image S',
    args: {
        alt: 'It is me',
        src: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
        size: AvatarSize.S,
    },
};

export const ImageSizeM: AvatarStory = {
    name: 'Image M',
    args: {
        alt: 'It is me',
        src: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
        size: AvatarSize.M,
    },
};

export const ImageSizeL: AvatarStory = {
    name: 'Image L',
    args: {
        alt: 'It is me',
        src: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
        size: AvatarSize.L,
    },
};

export const ImageSizeXL: AvatarStory = {
    name: 'Image XL',
    args: {
        alt: 'It is me',
        src: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
        size: AvatarSize.XL,
    },
};

export const NoImage: AvatarStory = {
    name: 'No image available - in M mode',
    args: {
        size: AvatarSize.M,
    },
};
