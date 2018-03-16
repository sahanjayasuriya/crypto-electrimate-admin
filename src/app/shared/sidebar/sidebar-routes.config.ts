import {RouteInfo} from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'ft-home',
    class: '',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: []
  },
  {
    path: '/users',
    title: 'User Management',
    icon: 'ft-users',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [
      {
        path: '/users/new',
        title: 'Add User',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
      {
        path: '/users/list',
        title: 'User List',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      },
    ]
  },
    {
        path: '/modules',
        title: 'Module',
        icon: 'ft-cpu',
        class: 'has-sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [
            {
                path: '/modules/new',
                title: 'Add Module',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/modules/list',
                title: 'Module List',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
        ]
    },
];
