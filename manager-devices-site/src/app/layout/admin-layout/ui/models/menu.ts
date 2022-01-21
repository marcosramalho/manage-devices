import { NavItem } from './nav-item';

export const menu: NavItem[] = [
  {
    displayName: 'Device',
    iconName: 'devices',
    route: 'device',
    children: [
      {
        displayName: 'New',
        iconName: '',
        route: 'devices/new',
      },
      {
        displayName: 'List',
        iconName: '',
        route: 'devices',
      },
    ],
  },
  {
    displayName: 'Category',
    iconName: 'category',
    route: 'category',
    children: [
      {
        displayName: 'New',
        iconName: '',
        route: 'categories/new',
      },
      {
        displayName: 'List',
        iconName: '',
        route: 'categories',
      },
    ],
  },
];
