import type { Meta, StoryObj } from '@storybook/react';
import { IconMumble } from '../../elements';
import { InteractiveButton } from './interactive-button';

const meta: Meta<typeof InteractiveButton> = {
    title: 'Components/Interactive Button/Default',
    component: InteractiveButton,
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=8862-2310&mode=design&t=72He1MwyRjB5KpiV-0',
        },
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
    },
    args: {
        label: 'Interaction!',
        Icon: IconMumble,
        disabled: false,
        name: 'interactive-button',
    },
};

export default meta;
type Story = StoryObj<typeof InteractiveButton>;

export const Default: Story = {};
