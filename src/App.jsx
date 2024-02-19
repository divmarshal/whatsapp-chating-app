import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import { AuthContextProvider } from "./context/AuthContext";
import Root from "./components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
