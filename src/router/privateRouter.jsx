import Layout from "../components/Layout/Layout";
import Admin from "../pages/Admin/Admin";
import Category from "../pages/Admin/Pages/Category";
import Edit from "../pages/Admin/Pages/Edit";
import Posts from "../pages/Admin/Pages/Posts";
import Users from "../pages/Admin/Pages/Users";
const privateRouter = [
  {
    element : <Layout/>,
    children : [
      {
        path: "/admin",
        element: <Admin />,
        children : [
          {
            path : 'users',
            element : <Users/>,
          },
          {
            path : 'category',
            element : <Category/>,
          },
          {
            path : 'posts',
            element : <Posts/>,
          },
          {
            path : 'edit',
            element : <Edit/>,
          },
        ]
      },

    ]
  }
];

export default privateRouter;
