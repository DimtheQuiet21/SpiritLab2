import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'

import App from './App.jsx'
// import Home from './pages/Home';
// import TheLab from './pages/TheLab';

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
      // {
      //   path: '/me',
      //   element: <Profile />
      // }, 
      // {
      //   path: '/thelab',
      //   element: <TheLab />
      // },  
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)