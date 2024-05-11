import type { Meta, StoryObj } from '@storybook/react';
import { IconCalendar, IconLocation, IconMumble, IconProfile, IconTime } from '../../elements';
import { IconLink } from './icon-link';
import { Variant } from '../../utlis';

const meta: Meta<typeof IconLink> = {
    title: 'Components/Icon Link',
    component: IconLink,
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
        variant: Variant,
    },
    args: {
        label: 'link',
        Icon: IconMumble,
        disabled: false,
        name: 'icon-link',
    },
};

export default meta;
type Story = StoryObj<typeof IconLink>;

export const Username: Story = {
    args: {
        label: 'Username',
        Icon: IconProfile,
        variant: Variant.PRIMARY,
    },
};

export const Timestamp: Story = {
    args: {
        label: 'Timestamp',
        Icon: IconTime,
        variant: Variant.SECONDARY,
    },
};

export const Location: Story = {
    args: {
        label: 'Location',
        Icon: IconLocation,
        variant: Variant.SECONDARY,
    },
};

export const Joined: Story = {
    args: {
        label: 'Joined',
        Icon: IconCalendar,
        variant: Variant.SECONDARY,
    },
};
