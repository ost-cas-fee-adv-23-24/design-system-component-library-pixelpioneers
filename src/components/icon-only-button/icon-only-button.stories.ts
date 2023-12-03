import type { Meta, StoryObj } from '@storybook/react';
import { IconMumble } from '../../elements';
import { IconOnlyButton } from './icon-only-button';

const meta: Meta<typeof IconOnlyButton> = {
    title: 'Components/Icon-Only Button',
    component: IconOnlyButton,
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=404-10&mode=design&t=72He1MwyRjB5KpiV-0',
        },
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
    },
    args: {
        Icon: IconMumble,
        disabled: false,
        name: 'icon-only-button',
    },
};

export default meta;
type Story = StoryObj<typeof IconOnlyButton>;

export const IconOnly: Story = {
    name: 'Icon-Only',
    args: {
        Icon: IconMumble,
    },
};
