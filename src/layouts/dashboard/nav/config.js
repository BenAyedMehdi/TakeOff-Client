// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Milestones',
    path: '/dashboard/app',
    icon: icon('ic_lock'),
  },
  {
    title: 'analytics',
    path: '/dashboard/analytics',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Reports',
    path: '/dashboard/reports',
    icon: icon('ic_blog'),
  },
  {
    title: 'products',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'companies',
    path: '/dashboard/companies',
    icon: icon('ic_user'),
  },
];

export default navConfig;
