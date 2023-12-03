import type { Meta, StoryObj } from '@storybook/react';
import { MSettings } from './m-settings';

const meta: Meta<typeof MSettings> = {
    title: 'Components/Modal/Content/Settings',
    component: MSettings,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export default meta;
type Story = StoryObj<typeof MSettings>;

export const Default: Story = {
    name: 'Einstellungen',
};
