import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import SingleMenuItem from "./pages/SingleMenuItem";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
// import i18n from "./i18n";
import { withNamespaces } from "react-i18next";

// kontakt (reCaptcha/reAptcha)
// cookie consent (videti sta je problem)
// nauci nodemailer
// terms of use strana
// lokalizacija do kraja
// konsultacija za boje, slike, raspored, sta ostaje/otpada/dodaje se
// lazy loading komponenata
// lazy loading slika (svih)
// What's in store sekcija
// // // mission & vision u gornjem redu
// // // future plans & milestones u drugom

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

const App = () => {
  return <RouterProvider router={router} />;
};

export default withNamespaces()(App);
