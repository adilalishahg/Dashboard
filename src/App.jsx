import * as ReactDOM from "react-dom/client";
import Dashboard from "./components/Dashboard";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Trips from "./components/Trips";
import MainRoot from "./components/MainRoot";
import Trip from "./components/trip";
import { ThemeProvider } from "./components/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "/trips", // Add a leading slash here
        element: <Trips />,
      },
      {
        path: "/trip", // Add a leading slash here
        element: <Trip />,
      },
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
