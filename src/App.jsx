import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import SingleMenuItem from "./pages/SingleMenuItem";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";

// localizacija
// slike
// boje
// naslovna
// o nama
// kontakt
// single item

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        // loader: landingLoader,
        // errorElement: <SinglePageError />,
        element: <HomePage />,
      },
      {
        path: "menu",
        // errorElement: <SinglePageError />,
        // loader: singleCocktailLoader,
        element: <Menu />,
      },
      {
        path: "menuitem/:id",
        // errorElement: <SinglePageError />,
        // loader: singleCocktailLoader,
        element: <SingleMenuItem />,
      },
      {
        path: "contact",
        // errorElement: <SinglePageError />,
        // loader: singleCocktailLoader,
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
