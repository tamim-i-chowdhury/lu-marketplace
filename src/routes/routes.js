import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Buy from "../components/Buy";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Shop from "../components/Shop";
import UserProfile from "../components/UserProfile";
import Root from "../layout/Root";
import PrivateRoute from "./PrivateRoute";
import Sell from "../components/Sell";
import Team from "../components/Team";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/buy",
        element: (
          <PrivateRoute>
            <Buy></Buy>
          </PrivateRoute>
        ),
      },
      {
        path: "/sell",
        element: (
          <PrivateRoute>
            <Sell></Sell>
          </PrivateRoute>
        ),
      },
      {
        path: "/shop",
        element: (
          <PrivateRoute>
            <Shop></Shop>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/team",
        element: <Team></Team>,
      },
    ],
  },
]);
