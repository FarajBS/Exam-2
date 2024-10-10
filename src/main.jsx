import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

// Pages //
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Books from "./pages/Books";
import Details from "./pages/Details"
//== Pages ==//

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);