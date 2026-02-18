import { createBrowserRouter, Navigate } from 'react-router-dom';


import LayoutContainer from '../../ui/components/LayoutContainer';
import { routesLinks, routesPaths } from '../../../shared/model/data/routesLinks';
import { MainPage } from '@pages/mainPage/MainPage';
import { LoginPage } from '@pages/loginPage/LoginPage';
import { ReportPage } from '@pages/reportPage/ReportPage';

const router = createBrowserRouter([
  {
    path: routesLinks.root,
    element: <LayoutContainer />,
    errorElement: <Navigate to={routesLinks.pageNotFound} />,
    children: [
      {
        index: true,
        element: <Navigate to={routesPaths.login} />,
      },
      {
        path: `/${routesPaths.login}`,
        element: <LoginPage />,
      },
      {
        path: `/${routesPaths.main}`,
        element: <MainPage />,
      },
      {
        path: `/${routesPaths.report}/:id`,
        element: <ReportPage />,
      },
      {
        path: `/${routesPaths.pageNotFound}`,
        element: <div >404</div>,
      },
    ],
  },
]);

export default router;
