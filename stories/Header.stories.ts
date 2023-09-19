import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

// Header
const meta: Meta<typeof Header> = {
  title: 'Example/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Michael Jackson',
    },
  },
};

export const LoggedOut: Story = {};
