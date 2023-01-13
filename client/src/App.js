import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//Import components and pages
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: Layout(),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Products/:id",
        element: <Products />,
      },
      {
        path: "/Product/:id",
        element: <Product />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
