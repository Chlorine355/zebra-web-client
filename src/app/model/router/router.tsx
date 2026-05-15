import { createBrowserRouter, Navigate } from 'react-router-dom';


import LayoutContainer from '../../ui/components/LayoutContainer';
import { routesLinks, routesPaths } from '../../../shared/model/data/routesLinks';

const router = createBrowserRouter([
  {
    path: routesLinks.root,
    element: <LayoutContainer />,
    errorElement: <Navigate to={routesLinks.pageNotFound} />,
    children: [
      {
        index: true,
        element: <div>Main</div>,
      },
      {
        path: `/${routesPaths.report}`,
        element: <div>Report</div>,
      },
      {
        path: `/${routesPaths.pageNotFound}`,
        element: <div >404</div>,
      },
    ],
  },
]);

export default router;
