import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface MenuItem {
  id: string;
  title: string;
  icon?: string;
  path?: string;
  children?: MenuItem[];
}

interface SidebarState {
  isCollapsed: boolean;
  expandedItems: string[];
  menuItems: MenuItem[];
}

const initialState: SidebarState = {
  isCollapsed: false,
  expandedItems: [],
  menuItems: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: 'layout-dashboard',
      path: '/dashboard'
    },
    {
      id: 'products',
      title: 'Products',
      icon: 'shopping-bag',
      children: [
        {
          id: 'products-list',
          title: 'All Products',
          path: '/dashboard/products'
        },
        {
          id: 'products-categories',
          title: 'Categories',
          path: '/dashboard/products/categories'
        }
      ]
    },
    {
      id: 'orders',
      title: 'Orders',
      icon: 'shopping-cart',
      children: [
        {
          id: 'orders-list',
          title: 'All Orders',
          path: '/dashboard/orders'
        },
        {
          id: 'orders-pending',
          title: 'Pending Orders',
          path: '/dashboard/orders/pending'
        }
      ]
    },
    {
      id: 'customers',
      title: 'Customers',
      icon: 'users',
      path: '/dashboard/customers'
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: 'settings',
      children: [
        {
          id: 'settings-general',
          title: 'General',
          path: '/dashboard/settings'
        },
        {
          id: 'settings-security',
          title: 'Security',
          path: '/dashboard/settings/security'
        }
      ]
    }
  ]
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isCollapsed = !state.isCollapsed;
    },
    toggleMenuItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const index = state.expandedItems.indexOf(itemId);
      if (index === -1) {
        state.expandedItems.push(itemId);
      } else {
        state.expandedItems.splice(index, 1);
      }
    },
    collapseAllItems: (state) => {
      state.expandedItems = [];
    }
  }
});

export const { toggleSidebar, toggleMenuItem, collapseAllItems } = sidebarSlice.actions;

export const selectSidebarState = (state: RootState) => state.sidebar.isCollapsed;
export const selectExpandedItems = (state: RootState) => state.sidebar.expandedItems;
export const selectMenuItems = (state: RootState) => state.sidebar.menuItems;

export default sidebarSlice.reducer;