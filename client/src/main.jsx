import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './App.jsx'


// Dynamically import the pages
const Home = React.lazy(() => import('./pages/Home'));
const TheLab = React.lazy(() => import('./pages/TheLab'));
const Profile = React.lazy(() => import('./pages/Profile.jsx'));
const Search = React.lazy(() => import('./pages/Search.jsx'));
const Results = React.lazy(() => import('./pages/Results.jsx'));
const Description = React.lazy(() => import('./pages/Description.jsx'));

//Temporary for Development
// import ConcoctV2 from './components/concoctV2/ConcoctV2.jsx';
// import ConcoctV3 from './components/concoctV3/ConcoctV3.jsx';

//Universal Styles
import './global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <React.Suspense fallback={<div>Loading...</div>}><Home /></React.Suspense>,
      },
      {
        path: '/search',
        element: <React.Suspense fallback={<div>Loading...</div>}><Search /></React.Suspense>,
      },
      {
        path: '/me',
        element: <React.Suspense fallback={<div>Loading...</div>}><Profile /></React.Suspense>,
      },
      {
        path: '/lab',
        element: <React.Suspense fallback={<div>Loading...</div>}><TheLab /></React.Suspense>,
      },
      {
        path: '/results',
        element: <React.Suspense fallback={<div>Loading...</div>}><Results /></React.Suspense>,
      },
      {
        path: '/description',
        element: <React.Suspense fallback={<div>Loading...</div>}><Description /></React.Suspense>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);