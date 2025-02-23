import type { Meta, StoryObj } from '@storybook/react';
import ThemeToggle from '@/components/ThemeToggle';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {};

export const WithDarkBackground: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};