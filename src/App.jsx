import Home from "./Pages/Home";
import About from "./Pages/About";
import Articles from "./Pages/Articles";
import OurStore from "./Pages/OurStore";
import StyleGuide from "./Pages/StyleGuide";
import ContactUs from "./Pages/ContactUs";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import MainLayout from "./Layouts/mainLayout";
import CartModal from "./components/CartModal";
import { useState } from "react";
import SingleBookPage from "./Pages/SingleBookPage";
import ScrollToTop from "./components/ScrollToTop";
import SIngleArticlePage from "./components/SIngleArticlePage";
import CartProvider from "./contexts/CartProvider";

function App() {
  const [toggleModal, setToggleModal] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout toggleModal={toggleModal} setToggleModal={setToggleModal} />
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "articles",
          element: <Articles />,
        },
        {
          path: "articles/:articleId",
          element: <SIngleArticlePage />,
        },
        {
          path: "ourstore",
          element: <OurStore />,
        },
        {
          path: "styleguide",
          element: <StyleGuide />,
        },
        {
          path: "contactus",
          element: <ContactUs />,
        },
        {
          path: "books/:id",
          element: <SingleBookPage />,
        },
      ],
    },
  ]);
  return (
    <CartProvider>
      <RouterProvider router={router} />
      <CartModal isOpen={toggleModal} setIsOpen={setToggleModal} />
    </CartProvider>
  );
}

export default App;
