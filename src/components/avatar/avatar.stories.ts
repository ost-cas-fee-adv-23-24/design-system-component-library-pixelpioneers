import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './avatar';
import { ImageSize } from './types';
import { IconSize } from '../../elements';

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
        imageSize: ImageSize,
    },
    args: {
        imageSize: ImageSize.S,
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    name: 'Avatar Default',
    args: {
        alt: 'It is me',
        src: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
        editMode: false,
        className: 'bg-primary-600 hover:bg-primary-700 w-2xl h-2xl',
        imageSize: ImageSize.S,
    },
};

export const ImageSizeS: Story = {
    name: 'Image S',
    args: {
        alt: 'It is me',
        src: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
        editMode: false,
        className: '',
        imageSize: ImageSize.S,
    },
};

export const ImageSizeM: Story = {
    name: 'Image M',
    args: {
        alt: 'It is me',
        src: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
        editMode: false,
        className: '',
        ringVariant: 'outline outline-secondary-100 outline-6',
        imageSize: ImageSize.M,
    },
};

export const ImageSizeL: Story = {
    name: 'Image L',
    args: {
        alt: 'It is me',
        src: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
        editMode: false,
        className: '',
        ringVariant: 'outline outline-secondary-100 outline-6',
        imageSize: ImageSize.L,
    },
};

export const ImageSizeXL: Story = {
    name: 'Image XL',
    args: {
        alt: 'It is me',
        src: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
        editMode: false,
        className: '',
        ringVariant: 'outline outline-secondary-100 outline-6',
        imageSize: ImageSize.XL,
    },
};

export const EditMode: Story = {
    name: 'Edit Mode',
    args: {
        alt: 'It is me',
        src: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
        editMode: true,
        className: '',
        ringVariant: 'outline outline-secondary-100 outline-6',
        imageSize: ImageSize.XL,
        iconEditModeSize: IconSize.M,
    },
};

export const NoImage: Story = {
    name: 'No image available - in M mode',
    args: {
        editMode: false,
        ringVariant: 'outline outline-secondary-100 outline-6',
        imageSize: ImageSize.M,
    },
};
