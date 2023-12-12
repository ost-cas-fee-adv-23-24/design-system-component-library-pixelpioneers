import type { Meta, StoryObj } from '@storybook/react';
import * as Branding from './branding';
import { Heading, HeadingSize, Label, LabelSize, LabelType } from '../../components';

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
        <Heading size={HeadingSize.H1}>Branding</Heading>
        <Label size={LabelSize.L}>Vertical</Label>
        <section className="m-xl flex flex-row justify-center">
            <Branding.LogoMumbleVertical sizeWidth="247" sizeHeight="128" />
        </section>

        <Label size={LabelSize.L}>Vertical Unfilled</Label>
        <section className="m-xl flex flex-row justify-center">
            <div className="rounded-m bg-primary-700 p-m">
                <Branding.LogoMumbleVerticalUnfilled sizeWidth="247" sizeHeight="128" />
            </div>
        </section>

        <Label size={LabelSize.L} type={LabelType.SPAN}>
            Horizontal (Modify color of title, icon and background) - especially for Horizontal
            only!
        </Label>
        <section className="m-xl flex flex-row justify-center">
            <div className="rounded-m bg-primary-700 p-m">
                <Branding.LogoMumbleHorizontal
                    titleClasses="fill-white"
                    iconClasses="fill-white"
                    sizeWidth="335"
                    sizeHeight="64"
                />
            </div>
        </section>

        <Label size={LabelSize.L}>Horizontal</Label>
        <section className="m-xl flex flex-row justify-center">
            <Branding.LogoMumbleHorizontal
                titleClasses="fill-primary-700"
                className="bg-white"
                iconClasses="fill-primary-700"
                sizeWidth="335"
                sizeHeight="64"
            />
        </section>

        <Label size={LabelSize.L}>Horizontal Background as Gradient</Label>
        <section className="m-xl flex flex-row justify-center">
            <div className="rounded-m bg-gradient-to-r from-tertiary-500 to-primary-500 p-m">
                <Branding.LogoMumbleHorizontal
                    titleClasses="fill-white"
                    iconClasses="fill-primary-700"
                    sizeWidth="335"
                    sizeHeight="64"
                />
            </div>
        </section>

        <Label size={LabelSize.L}>Horizontal Gradient - Text as Gradient</Label>
        <section className="m-xl flex flex-row justify-center">
            <Branding.LogoMumbleHorizontalGradient
                stopColor="bg-tertiary-500"
                offsetStopColor="bg-primary-500"
                iconClasses="fill-primary-700"
                sizeWidth="335"
                sizeHeight="64"
            />
        </section>

        <Label size={LabelSize.L}>Horizontal Unfilled</Label>
        <section className="m-xl flex flex-row justify-center">
            <div className="rounded-m bg-primary-700 p-m">
                <Branding.LogoMumbleHorizontalUnfilled sizeWidth="335" sizeHeight="64" />
            </div>
        </section>

        <Label size={LabelSize.L}>Horizontal Switcher Unfilled</Label>
        <section className="m-xl flex flex-row justify-center">
            <div className="rounded-m bg-primary-700 p-m">
                <Branding.LogoMumbleHorizontalSwitcherUnfilled sizeWidth="241" sizeHeight="128" />
            </div>
        </section>

        <Label size={LabelSize.L}>Vertical Gradient</Label>
        <section className="m-xl flex flex-row justify-center">
            <Branding.LogoMumbleVerticalGradient sizeWidth="247" sizeHeight="128" />
        </section>

        <Label size={LabelSize.L}>Horizontal Gradient</Label>
        <section className="m-xl flex flex-row justify-center">
            <Branding.LogoMumbleHorizontalGradient sizeWidth="335" sizeHeight="64" />
        </section>

        <Label size={LabelSize.L}>Logo Icon Gradient</Label>
        <section className="m-xl flex flex-row justify-center">
            <Branding.LogoIconGradient sizeWidth="160" sizeHeight="160" />
        </section>

        <Label size={LabelSize.L}>Logo Icon White Background</Label>
        <section className="m-xl flex flex-row justify-center">
            <Branding.LogoIconBackgroundWhite sizeWidth="160" sizeHeight="160" />
        </section>

        <Label size={LabelSize.L}>Logo Icon Neutral</Label>
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
