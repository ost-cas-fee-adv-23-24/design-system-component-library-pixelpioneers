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
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/nsXR2h0KwciWpuwKRD58FX/Mumble?type=design&node-id=437-1020&mode=design&t=72He1MwyRjB5KpiV-0',
        },
    },
    tags: ['autodocs'],
};

export default meta;

export const IconStory: StoryObj<typeof Icons.IconMumble> = (args: IconProps) => {
    const IconList = Object.values(Icons);
    return (
        <ul className="grid grid-flow-col grid-rows-4 gap-xl">
            {IconList.map((icon: FC<IconProps>) => (
                <li
                    key={icon.displayName}
                    className={`m-1.5 rounded-lg p-2 flex flex-col items-center drop-shadow-lg ${
                        icon.displayName === 'IconHeartFilled' && 'animate-pulse'
                    }`}
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
    name: 'That is an Mumble Icon M',
    args: {
        title: 'That is an Mumble Icon M',
        className: 'fill-primary-700 hover:fill-secondary-700',
        size: IconSize.M,
    },
    render,
};

export const SingleIconLStory: Story = {
    name: 'That is an Mumble Icon L',
    args: {
        title: 'That is an Mumble Icon L',
        className: 'fill-primary-700 hover:fill-secondary-700',
        size: IconSize.L,
    },
    render,
};

export const SingleIconAnimatePingLStory: Story = {
    name: '⭐️ Ping Animated Icon',
    args: {
        title: '⭐️ Ping Animated Icon',
        className: 'fill-primary-700 hover:fill-secondary-700 animate-ping',
        size: IconSize.L,
    },
    render,
};

export const SingleIconAnimateSpingLStory: Story = {
    name: '⭐️ Spin Animated Icon',
    args: {
        title: '⭐️ Spin Animated Icon',
        className: 'fill-primary-700 hover:fill-secondary-700 animate-spin',
        size: IconSize.L,
    },
    render,
};

export const SingleIconAnimatePulseLStory: Story = {
    name: '⭐️ Pulse Animated Icon',
    args: {
        title: '⭐️ Pulse Animated Icon',
        className: 'fill-primary-700 hover:fill-secondary-700 animate-pulse',
        size: IconSize.L,
    },
    render,
};
