import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
    title: 'Components/Form/Textarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=8862-2726&mode=design&t=72He1MwyRjB5KpiV-0',
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        placeholder: 'Was gibt es Neues?',
    },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const DefaultText: Story = {
    name: 'Textarea Default',
    args: {},
};

export const DefaultInitialTextValue: Story = {
    name: 'Textarea with any value',
    args: {
        defaultValue: 'Ich heisse André und wohne in Wädenswil',
    },
};
