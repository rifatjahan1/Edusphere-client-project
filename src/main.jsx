import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layouts/MainLayout.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import Home from './pages/Home.jsx';
import AllArticles from './pages/AllArticles.jsx';
import CategoryArticles from './Component/CategoryArticles.jsx';
import PostArticles from './pages/PostArticles.jsx';
import ArticleDetails from './Component/ArticleDetails.jsx';
import MyArticles from './pages/MyArticles.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import ForgotPassword from './Component/ForgotPassword.jsx';
import axios from 'axios';
import AuthProvider from './Auth/AuthProvider.jsx';
import PrivateRoute from './PrivateRoutes/PrivateRoute.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await axios.get('http://localhost:3000/articles');
          return res.data;
        },
        element: <Home />
      },
      {
        path: "allArticles",
        loader: async () => {
          const res = await axios.get('http://localhost:3000/allArticles');
          return res.data;
        },

        element: <AllArticles />
      },
      {
        path: "category/:category",
        loader: async ({ params }) => {
          const res = await axios.get(`http://localhost:3000/articles?category=${params.category}`);
          return res.data;
        },
        element: <CategoryArticles />
      },
      {
        path: "postArticles",
        element: <PrivateRoute><PostArticles /></PrivateRoute>
      },
      {
        path: "/articleDetails/:id",
               loader: async ({ params }) => {
          const res = await axios.get(`http://localhost:3000/articles/${params.id}`);
          return res.data;
        },
        element: <ArticleDetails />
      },
      {
        path: "myArticles",
        element: <MyArticles />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "forgotPassword",
        element: <ForgotPassword />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
