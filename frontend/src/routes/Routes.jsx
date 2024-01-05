import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import ProductPage from '../pages/ProductPage';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ShippingPage from '../pages/ShippingPage';
import PrivateRoute from '../components/PrivateRoute';
import PaymentPage from '../pages/PaymentPage';
import PlaceOrderPage from '../pages/PlaceOrderPage';
import OrderDetailsPage from '../pages/OrderDetailsPage';
import ProfilePage from '../pages/ProfilePage';
import AdminRoute from '../components/AdminRoute';
import OrderListPage from '../pages/admin/OrderListPage';
import ProductListPage from '../pages/admin/ProductListPage';
import UserListPage from '../pages/admin/UserListPage';
// import CreateProductPage from '../pages/admin/CreateProductPage';
// import UpdateProductPage from '../pages/admin/UpdateProductPage';
import ProductFormPage from '../pages/admin/ProductFormPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: '/',
        element: <HomePage />
      },
      {
        path: '/product/:id',
        element: <ProductPage />
      },
      {
        path: '/cart',
        element: <CartPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/register',
        element: <RegisterPage />
      },
      {
        path: '',
        element: <PrivateRoute />,
        children: [
          {
            path: '/shipping',
            element: <ShippingPage />
          },
          {
            path: '/payment',
            element: <PaymentPage />
          },
          {
            path: '/place-order',
            element: <PlaceOrderPage />
          },
          {
            path: '/order/:id',
            element: <OrderDetailsPage />
          },
          {
            path: '/profile',
            element: <ProfilePage />
          }
        ]
      },
      {
        path: '',
        element: <AdminRoute />,
        children: [
          {
            path: '/admin/order-list',
            element: <OrderListPage />
          },
          {
            path: '/admin/product-list',
            element: <ProductListPage />
          },
          {
            path: '/admin/user-list',
            element: <UserListPage />
          },
          {
            path: '/admin/product/create',
            element: <ProductFormPage />
          },
          {
            path: '/admin/product/update/:id',
            element: <ProductFormPage />
          }
        ]
      }
    ]
  }
]);
const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
