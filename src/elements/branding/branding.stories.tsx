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

        <h3>
            Horizontal (Modify color of title, icon and background) - espacially for Logo Mumble
            Horizontaly only!
        </h3>
        <h5>Example 1</h5>
        <section className="m-xl flex flex-row justify-center">
            <Branding.LogoMumbleHorizontal
                titleClasses="fill-white text-white"
                className="bg-primary-700"
                iconClasses="fill-white text-white"
                sizeWidth="335"
                sizeHeight="64"
            />
        </section>

        <h3>Horizontal</h3>
        <h5>Example 2</h5>
        <section className="m-xl flex flex-row justify-center">
            <Branding.LogoMumbleHorizontal
                titleClasses="fill-primary-700 text-primary-700"
                className="bg-white"
                iconClasses="fill-primary-700 text-primary-700"
                sizeWidth="335"
                sizeHeight="64"
            />
        </section>

        <h3>Horizontal</h3>
        <h5>Example 3</h5>
        <section className="m-xl flex flex-row justify-center">
            <Branding.LogoMumbleHorizontal
                titleClasses="fill-white text-white"
                className="bg-gradient-to-r from-tertiary-500 to-primary-500"
                iconClasses="fill-primary-700 text-primary-700"
                sizeWidth="335"
                sizeHeight="64"
            />
        </section>

        <h3>Horizontal</h3>
        <h5>Example 4</h5>
        <section className="m-xl flex flex-row justify-center">
            <Branding.LogoMumbleHorizontal
                titleClasses="from-tertiary-500 to-primary-500 bg-gradient-to-r bg-gradient-30-70"
                className="text-transparent bg-gradient-30-70 from-tertiary-500 to-primary-500 bg-clip-text"
                iconClasses="fill-primary-700 text-primary-700"
                sizeWidth="335"
                sizeHeight="64"
            />
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
