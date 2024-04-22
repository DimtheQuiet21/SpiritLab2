import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './App.jsx'
import Home from './pages/Home';
import TheLab from './pages/TheLab';
import Profile from './pages/Profile.jsx';
import Search from './pages/Search.jsx';
import Explore from './pages/Explore.jsx';

//Temporary for Development
import DrinkRenderer from './components/drinkRenderer/DrinkRenderer.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/search',
        element: <Search />
      },
      {
        path: '/me',
        element: <Profile />
      }, 
      {
        path: '/lab',
        element: <TheLab />
      },
      //Temporary for Development
      {
        path: '/drinkrenderer',
        element: <DrinkRenderer />
      },
      {
        path: '/explore',
        element: <Explore />
      },  
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)