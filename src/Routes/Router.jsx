import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddVisa from "../pages/AddVisa/AddVisa";
import AllVisa from "../pages/AllVisa/AllVisa";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/add-visa",
                element: <AddVisa></AddVisa>
            },
            {
                path: "/all-visas",
                element: <AllVisa></AllVisa>
            }
        ]
    }
])


export default Router;