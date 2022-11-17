import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Category from "../Pages/Category/Category/Category";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import News from "../Pages/News/News/News";
import Profile from "../Pages/Others/Profile/Profile";
import TermsAndConditions from "../Pages/Others/TermsAndCondition/TermsAndConditions";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://magnificent-news-server.vercel.app/news"),
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(
            `https://magnificent-news-server.vercel.app/category/${params.id}`
          ),
        element: <Category></Category>,
      },
      {
        path: "/news/:id",
        loader: ({ params }) =>
          fetch(`https://magnificent-news-server.vercel.app/news/${params.id}`),
        element: (
          <PrivateRoute>
            <News />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <TermsAndConditions />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
