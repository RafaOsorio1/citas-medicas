import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Start } from "./Pages/Start";
import { AuthProvider } from "./Context/AuthContext";
import { Home } from "./Pages/Home";
import { Register } from "./Components/Login/Register";

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
    children: [],
  },
  {
    path: "/home",
    element: <Home />,
    children: [],
  },
  {
    path: "/register",
    element: <Register/>,
    children: [],
  },
]);

root.render(
  <AuthProvider>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </AuthProvider>
);
