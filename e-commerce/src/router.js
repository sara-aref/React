import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/products/ProductDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
const WithoutLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
      },
    ],
  },
  {
    element: <WithoutLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
