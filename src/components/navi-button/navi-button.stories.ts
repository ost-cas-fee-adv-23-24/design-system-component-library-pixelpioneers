import type { Meta, StoryObj } from '@storybook/react';
import { NaviButton } from './navi-button';
import { IconLogoutAnimated, IconSettingsAnimated } from '../../elements/icons/icons';

const meta: Meta<typeof NaviButton> = {
    title: 'Components/NaviButton',
    component: NaviButton,
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=8862-2489&mode=design&t=72He1MwyRjB5KpiV-0',
        },
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
    },
    args: {},
};

export default meta;
type Story = StoryObj<typeof NaviButton>;

export const DefaultNaviButton: Story = {
    name: 'NaviButton Default',
    args: {
        className: 'bg-primary-600 hover:bg-primary-700 text-white',
        label: 'Nico',
        Icon: IconLogoutAnimated,
    },
};

export const DefaultNaviButtonLogout: Story = {
    name: 'NaviButton Icon Logout',
    args: {
        className: 'bg-primary-600 hover:bg-primary-700 text-white',
        label: 'Label',
        Icon: IconLogoutAnimated,
    },
};

export const DefaultNaviButtonSettings: Story = {
    name: 'NaviButton Icon Settings',
    args: {
        className: 'bg-primary-600 hover:bg-primary-700 text-white',
        label: 'Label',
        Icon: IconSettingsAnimated,
    },
};
