import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import AllProductsPage from './pages/AllProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import MilestonesPage from './pages/MilestonesPage';
import ReportsPage from './pages/ReportsPage';
import CompaniesPage from './pages/CompaniesPage';
import AnalyticsPage from './pages/AnalyticsPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <MilestonesPage /> },
        { path: 'analytics', element: <AnalyticsPage /> },
        { path: 'reports', element: <ReportsPage /> },
        { path: 'products', element: <AllProductsPage /> },
        { path: 'companies', element: <CompaniesPage /> },


        { path: 'user', element: <UserPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
