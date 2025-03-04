import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Sidebar } from '@/components/Sidebar';
import sidebarReducer from '@/store/features/sidebarSlice';
import themeReducer from '@/store/features/themeSlice';

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    theme: themeReducer
  }
});

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div style={{ height: '100vh' }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Collapsed: Story = {
  parameters: {
    state: {
      sidebar: {
        isCollapsed: true,
        expandedItems: [],
      }
    }
  }
};

export const WithExpandedItems: Story = {
  parameters: {
    state: {
      sidebar: {
        isCollapsed: false,
        expandedItems: ['products', 'settings'],
      }
    }
  }
};