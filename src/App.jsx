import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
