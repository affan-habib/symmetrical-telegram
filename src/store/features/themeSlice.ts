import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface ThemeState {
  darkMode: boolean
}

const initialState: ThemeState = {
  darkMode: false
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode
    },
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload
    }
  }
})

export const { toggleTheme, setTheme } = themeSlice.actions
export const selectDarkMode = (state: RootState) => state.theme.darkMode
export default themeSlice.reducer