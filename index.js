import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'; // ✅ correct
import CountryDetail from './components/CountryDetail.jsx';
import CountryNotFound from './components/CountryNotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/:Country',
        element: <CountryDetail />,
      },

    ],
  },
]);

const root = createRoot(document.querySelector("#root"))
root.render(<RouterProvider router={router} />)