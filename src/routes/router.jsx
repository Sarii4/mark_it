import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ListPage from "../components/listpage/ListPage";

const router = createBrowserRouter([
{
  path: "/",
  element: <Home/>,
  children:[
    {
      path: "list",
      element: <ListPage/>
    }
  ]
}

])

export default router;