import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './avatar';
import { AvatarVariant } from './types';

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
        onClick: { action: 'clicked' },
        variant: AvatarVariant,
    },
    args: {
        variant: AvatarVariant.S,
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    name: 'Avatar Default',
    args: {
        alt: 'It is me',
        src: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
        variant: AvatarVariant.S,
    },
};

export const ImageSizeS: Story = {
    name: 'Image S',
    args: {
        alt: 'It is me',
        src: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
        variant: AvatarVariant.S,
    },
};

export const ImageSizeM: Story = {
    name: 'Image M',
    args: {
        alt: 'It is me',
        src: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
        variant: AvatarVariant.M,
    },
};

export const ImageSizeL: Story = {
    name: 'Image L',
    args: {
        alt: 'It is me',
        src: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
        variant: AvatarVariant.L,
    },
};

export const ImageSizeXL: Story = {
    name: 'Image XL',
    args: {
        alt: 'It is me',
        src: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
        variant: AvatarVariant.XL,
    },
};

export const EditMode: Story = {
    name: 'Edit Mode',
    args: {
        alt: 'It is me',
        src: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
        variant: AvatarVariant.EDIT,
    },
};

export const NoImage: Story = {
    name: 'No image available - in M mode',
    args: {
        variant: AvatarVariant.M,
    },
};
