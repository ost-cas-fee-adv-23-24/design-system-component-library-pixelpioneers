import type { Meta, StoryObj } from '@storybook/react';
import * as Branding from './branding';

type Story = StoryObj<typeof Branding.LogoMumbleHorizontal>;

const meta: Meta<typeof Branding.LogoMumbleHorizontal> = {
    title: 'Elements/Branding',
    argTypes: {},
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

const render: Story['render'] = () => (
    <div className="flow flow-row justify-center text-center">
        <h3>Vertical</h3>
        <section className="m-xl flex flex-row justify-center">
            <Branding.LogoMumbleVertical sizeWidth="247" sizeHeight="128" />
        </section>

        <h3>Vertical Unfilled</h3>
        <section className="m-xl flex flex-row justify-center">
            <Branding.LogoMumbleVerticalUnfilled
                className="bg-primary-700"
                sizeWidth="247"
                sizeHeight="128"
            />
        </section>

        <h3>Horizontal</h3>
        <section className="m-xl flex flex-row justify-center">
            <Branding.LogoMumbleHorizontal sizeWidth="335" sizeHeight="64" />
        </section>

        <h3>Horizontal Unfilled</h3>
        <section className="m-xl flex flex-row justify-center">
            <Branding.LogoMumbleHorizontalUnfilled
                className="bg-primary-700"
                sizeWidth="335"
                sizeHeight="64"
            />
        </section>

        <h3>Horizontal Switcher Unfilled</h3>
        <section className="m-xl flex flex-row justify-center">
            <Branding.LogoMumbleHorizontalSwitcherUnfilled
                className="bg-primary-700"
                sizeWidth="241"
                sizeHeight="128"
            />
        </section>

        <h3>Vertical Gradient</h3>
        <section className="m-xl flex flex-row justify-center">
            <Branding.LogoMumbleVerticalGradient sizeWidth="247" sizeHeight="128" />
        </section>

        <h3>Horizontal Gradient</h3>
        <section className="m-xl flex flex-row justify-center">
            <Branding.LogoMumbleHorizontalGradient sizeWidth="335" sizeHeight="64" />
        </section>

        <h3>Logo Icon Gradient</h3>
        <section className="m-xl flex flex-row justify-center">
            <Branding.LogoIconGradient sizeWidth="160" sizeHeight="160" />
        </section>

        <h3>Logo Icon White Background</h3>
        <section className="m-xl flex flex-row justify-center">
            <Branding.LogoIconBackgroundWhite sizeWidth="160" sizeHeight="160" />
        </section>

        <h3>Logo Icon Neutral</h3>
        <section className="m-xl flex animate-bounce flex-row justify-center">
            <Branding.LogoIconNeutral sizeWidth="64" sizeHeight="64" />
        </section>
    </div>
);

export const MumbleLogoHorizontal: Story = {
    name: 'Logos',
    args: {
        title: 'Mumble Logo',
    },
    render,
};
