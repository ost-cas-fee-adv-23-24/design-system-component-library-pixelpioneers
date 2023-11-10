import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './avatar';
import { ImageSize } from './types';

const meta: Meta<typeof Avatar> = {
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    name: 'Avatar Default',
    args: {
        alt: 'It is me',
        src: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
        editMode: false,
        className: 'bg-primary-600 w-xl h-xl',
        imageSize: ImageSize.S,
    },
};

export const EditMode: Story = {
    name: 'Avatar in Edit Mode',
    args: {
        alt: 'It is me',
        src: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
        editMode: true,
        className: 'bg-primary-600 w-xl h-xl',
        imageSize: ImageSize.M,
    },
};

export const ImageSizeS: Story = {
    name: 'Image S',
    args: {
        alt: 'It is me',
        src: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
        editMode: false,
        className: 'bg-primary-600 w-xl h-xl',
        imageSize: ImageSize.S,
    },
};

export const ImageSizeM: Story = {
    name: 'Image M',
    args: {
        alt: 'It is me',
        src: 'https://easydrawingguides.com/wp-content/uploads/2019/09/Donald-Duck-10.png',
        editMode: false,
        className: 'bg-primary-600 w-xl h-xl',
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
        className: 'bg-primary-600 w-[100px] h-[100px]',
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
        className: 'bg-primary-600 w-[100px] h-[100px]',
        ringVariant: 'outline outline-secondary-100 outline-2xs',
        imageSize: ImageSize.XL,
    },
};
