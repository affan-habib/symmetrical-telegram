import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import themeReducer, { toggleTheme } from '@/store/features/themeSlice';
import ThemeToggle from '@/components/ThemeToggle';

const createMockStore = (initialState = { theme: { darkMode: false } }) => {
  return configureStore({
    reducer: {
      theme: themeReducer
    },
    preloadedState: initialState
  });
};

describe('ThemeToggle', () => {
  it('renders theme toggle button', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <ThemeToggle />
      </Provider>
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('toggles theme when clicked', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <ThemeToggle />
      </Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const state = store.getState();
    expect(state.theme.darkMode).toBe(true);
  });

  it('displays correct icon based on theme', () => {
    const store = createMockStore({ theme: { darkMode: true } });
    render(
      <Provider store={store}>
        <ThemeToggle />
      </Provider>
    );

    expect(screen.getByLabelText('Switch to light mode')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByLabelText('Switch to dark mode')).toBeInTheDocument();
  });
});