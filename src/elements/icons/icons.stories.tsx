import type { Meta, StoryObj } from '@storybook/react';
import type { FC } from 'react';
import { createElement } from 'react';
import { IconProps, IconSize } from '.';
import * as Icons from './icons';

type Story = StoryObj<typeof Icons.IconMumble>;

const meta: Meta<typeof Icons.IconMumble> = {
    title: 'Elements/Icons',
    argTypes: {
        size: {
            options: Object.values(IconSize),
            control: { type: 'radio' },
        },
    },
    parameters: {
        layout: 'padded',
    },
};

export default meta;

export const IconStory: StoryObj<typeof Icons.IconMumble> = (args: IconProps) => {
    const IconList = Object.values(Icons);
    return (
        <ul className="grid grid-flow-col grid-rows-4 gap-xl bg-gradient-to-tr">
            {IconList.map((icon: FC<IconProps>) => (
                <li
                    key={icon.name}
                    className="m-1.5 rounded-lg p-2 flex flex-col items-center drop-shadow-lg"
                >
                    {createElement(icon, args)}
                    <p className="text-150 pt-2 w-full break-words text-center">{icon.name}</p>
                </li>
            ))}
        </ul>
    );
};

IconStory.storyName = 'All Icons';
IconStory.args = {
    size: IconSize.L,
    className: 'fill-primary-700 hover:fill-secondary-700',
};

const render: Story['render'] = (args) => (
    <div className="group">
        <Icons.IconMumble {...args} />
    </div>
);

export const SingleIconMStory: Story = {
    args: {
        title: 'That is an Mumble Icon M',
        className: 'fill-primary-700 hover:fill-secondary-700',
        size: IconSize.M,
    },
    render,
};

export const SingleIconLStory: Story = {
    args: {
        title: 'That is an Mumble Icon L',
        className: 'fill-primary-700 hover:fill-secondary-700',
        size: IconSize.L,
    },
    render,
};
