import { Home } from '../components/pages/Home';
import { Page404 } from '../components/pages/Page404';
import { Setting } from '../components/pages/Setting';
import { UserManagement } from '../components/pages/UserManagement';

type Route = {
  path: string;
  exact: boolean;
  children: JSX.Element;
};

export const homeRoutes: Route[] = [
  {
    path: '/',
    exact: true,
    children: <Home />,
  },
  {
    path: '/user_management',
    exact: false,
    children: <UserManagement />,
  },
  {
    path: '/setting',
    exact: false,
    children: <Setting />,
  },
  {
    path: '*',
    exact: false,
    children: <Page404 />,
  },
];
