import type { Meta, StoryObj } from '@storybook/react';
import type { FC } from 'react';
import { createElement } from 'react';
import type { IconProps } from '.';
import * as Icons from './icons';

type Story = StoryObj<typeof Icons.IconMumble>;

export default {
    title: 'Elements/Icons',
    parameters: {
        layout: 'padded',
    },
} as Meta<typeof Icons.IconMumble>;

export const IconStory: StoryObj<typeof Icons.IconMumble> = (args: IconProps) => {
    const IconList = Object.values(Icons);
    return (
        <ul className="from-primary-default to-primary-bold2 flex flex-1 flex-row flex-wrap justify-center bg-gradient-to-tr">
            {IconList.map((icon: FC<IconProps>) => (
                <li
                    key={icon.name}
                    className="bg-neutral-on-default m-1.5 flex h-20 w-16 flex-col items-center rounded-lg p-2 drop-shadow-lg md:w-20"
                >
                    {createElement(icon, args)}
                    <p className="text-150 md:text-200 w-full break-words pt-2 text-center">
                        {icon.name}
                    </p>
                </li>
            ))}
        </ul>
    );
};

IconStory.storyName = 'All Icons';
IconStory.args = {
    className:
        'w-8 h-8 shrink-0 bg-neutral-on-default p-1.5 mt-1.5 text-primary-default hover:text-primary-bold2',
};

const render: Story['render'] = (args) => <Icons.IconMumble {...args} />;

export const SingleIconStory: Story = {
    args: {
        title: 'That is an Mumble Icon',
        className: 'w-8 h-8 text-primary-default',
    },
    render,
};
