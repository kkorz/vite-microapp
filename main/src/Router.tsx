import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Solidjs from './pages/solidjs';
import Umi4 from './pages/umi/Umi4';
import Vue2 from './pages/vue/Vue2';

function Router() {
  const routes = useRoutes([
    { path: '/welcome', element: <Welcome /> },
    { path: '/solidjs', element: <Solidjs /> },
    { path: '/umi/umi4', element: <Umi4 /> },
    { path: '/vue/vue2', element: <Vue2 /> },
    { path: '*', element: <Welcome /> },
  ]);

  return <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>;
}

export default Router;
