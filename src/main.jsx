import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductDetailPage from './Pages/ProductDetailPage.jsx';
import ProductListPage from './Pages/ProductListPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    index: true,
    element: <ProductListPage />,
  },
  {
    path: '/productdetails',
    element: <ProductDetailPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
