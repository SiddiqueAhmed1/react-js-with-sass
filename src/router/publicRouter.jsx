import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Layout from "../components/Layout/Layout";
import Service from "../pages/Service/Service";
import Contact from "../pages/Contact/Contact";

const publicRouter = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/service",
        element: <Service />,
      },
    ],
  },
];

export default publicRouter;
