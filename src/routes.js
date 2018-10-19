// import HomePage from './components/pages/HomePage';
// import AboutPage from './components/pages/AboutPage';
// import FormPage from './components/pages/FormPage';
// import DynamicRoutePage from './components/pages/DynamicRoutePage';
// import NotFoundPage from './components/pages/NotFoundPage';
// import PanelLeftPage from './components/pages/PanelLeftPage';
// import PanelRightPage from './components/pages/PanelRightPage';
import Wizard1 from './components/pages/Wizard1';
import Wizard2 from './components/pages/Wizard2';
import Wizard3 from './components/pages/Wizard3';
import Wizard4 from './components/pages/Wizard4';
import Wizard5 from './components/pages/Wizard5';
import Wizard6 from './components/pages/Wizard6';
import Wizard7 from './components/pages/Wizard7';
import Wizard8 from './components/pages/Wizard8';
import ChartTest from './components/pages/ChartTest';

export default [
  // {
  //   path: '/',
  //   component: HomePage,
  // },
  // {
  //   path: '/panel-left/',
  //   component: PanelLeftPage,
  // },
  // {
  //   path: '/panel-right/',
  //   component: PanelRightPage,
  // },
  // {
  //   path: '/about/',
  //   component: AboutPage,
  // },
  // {
  //   path: '/form/',
  //   component: FormPage,
  // },
  // {
  //   path: '/dynamic-route/blog/:blogId/post/:postId/',
  //   component: DynamicRoutePage,
  // },
  // {
  //   path: '(.*)',
  //   component: NotFoundPage,
  // },
  {
    path: '/wizard/1',
    component: Wizard1,
  },
  {
    path: '/wizard/2',
    component: Wizard2,
  },
  {
    path: '/wizard/3',
    component: Wizard3,
  },
  {
    path: '/wizard/4',
    component: Wizard4,
  },
  {
    path: '/wizard/5',
    component: Wizard5,
  },
  {
    path: '/wizard/6',
    component: Wizard6,
  },
  {
    path: '/wizard/7',
    component: Wizard7,
  },
  {
    path: '/wizard/8',
    component: Wizard8,
  },
  {
    path: '/graph/',
    component: ChartTest,
  },
];
