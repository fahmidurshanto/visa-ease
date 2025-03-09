import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddVisa from "../pages/AddVisa/AddVisa";
import AllVisa from "../pages/AllVisa/AllVisa";
import PrivateRoute from "./PrivateRoute";
import VisaDetails from "../pages/VisaDetails/VisaDetails";
import MyAddedVisa from "../pages/MyAddedVisa/MyAddedVisa";

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
                element: <PrivateRoute><AddVisa></AddVisa></PrivateRoute>
            },
            {
                path: "/all-visas",
                element: <AllVisa></AllVisa>
            },
            {
                path: "/all-visas/:_id",
                loader: ({params})=> fetch(`http://localhost:5000/all-visa/${params._id}`).then((res)=>res.json()),
                element: <VisaDetails></VisaDetails>
            },
            {
                path: "/my-added-visa",
                element: <MyAddedVisa></MyAddedVisa>
            }
        ]
    }
])


export default Router;