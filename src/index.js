import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>Mock Page</h1>;
const NotFound = () => <h1>Page Not Found</h1>;

// pre-defined router is needed as a dependency for application initializer
const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
  },
]);

// initailize application with router...

// routesDefinitions are returned from application initializer
const routesDefinitions = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mock",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

router.patchRoutes("root", routesDefinitions);

// resolve full browser url on init / page refresh, AFTER pathRoutes has finished
await router.navigate(
  window.location.pathname + window.location.search + window.location.hash,
  {
    replace: true,
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
