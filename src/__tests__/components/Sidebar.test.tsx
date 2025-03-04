import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from '@/store/features/sidebarSlice';
import themeReducer from '@/store/features/themeSlice';
import { Sidebar } from '@/components/Sidebar';

const createMockStore = (initialState = {
  sidebar: {
    isCollapsed: false,
    expandedItems: [],
    menuItems: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        icon: 'layout-dashboard',
        path: '/dashboard'
      }
    ]
  },
  theme: { darkMode: false }
}) => {
  return configureStore({
    reducer: {
      sidebar: sidebarReducer,
      theme: themeReducer
    },
    preloadedState: initialState
  });
};

describe('Sidebar', () => {
  it('renders sidebar with menu items', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('toggles sidebar collapse state', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );

    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);

    const state = store.getState();
    expect(state.sidebar.isCollapsed).toBe(true);
  });

  it('expands submenu when clicked', () => {
    const store = createMockStore({
      sidebar: {
        isCollapsed: false,
        expandedItems: [],
        menuItems: [
          {
            id: 'settings',
            title: 'Settings',
            icon: 'settings',
            children: [
              {
                id: 'settings-general',
                title: 'General',
                path: '/dashboard/settings'
              }
            ]
          }
        ]
      },
      theme: { darkMode: false }
    });

    render(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );

    const settingsButton = screen.getByText('Settings');
    fireEvent.click(settingsButton);

    const state = store.getState();
    expect(state.sidebar.expandedItems).toContain('settings');
    expect(screen.getByText('General')).toBeInTheDocument();
  });
});