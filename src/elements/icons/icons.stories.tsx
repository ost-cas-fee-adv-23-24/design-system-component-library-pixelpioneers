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
        <ul className="flex flex-1 flex-row flex-wrap justify-center bg-gradient-to-tr">
            {IconList.map((icon: FC<IconProps>) => (
                <li
                    key={icon.name}
                    className="w-18 m-1.5 flex flex-col items-center rounded-lg p-2 drop-shadow-lg"
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
    size: IconSize.MD,
    className: 'text-blue-700 hover:text-blue-950',
};

const render: Story['render'] = (args) => (
    <div className="group">
        <Icons.IconMumble {...args} />
    </div>
);

export const SingleIconStory: Story = {
    args: {
        title: 'That is an Mumble Icon',
        className: 'text-blue-700 hover:text-blue-950',
        size: IconSize.MD,
    },
    render,
};
