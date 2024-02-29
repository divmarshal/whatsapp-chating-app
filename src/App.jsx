import React from "react";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import { AuthContextProvider } from "./context/AuthContext";
import Root from "./components/Root";
import ChatRoom from "./components/ChatRoom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/Chats/:feed",
        element: <Root />,
      },
      {
        path: "/Chatroom",
        element: <ChatRoom />,
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
