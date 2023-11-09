import type { Meta, StoryObj } from '@storybook/react';
import { ShareButton } from './share-button';

const meta: Meta<typeof ShareButton> = {
    title: 'Components/Interactive Button/Share',
    component: ShareButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        label: 'Copy Link',
        labelShared: 'Link copied',
        disabled: false,
        name: 'share-button',
        link: 'www.migros.ch',
    },
};

export default meta;
type Story = StoryObj<typeof ShareButton>;

export const Default: Story = {};
