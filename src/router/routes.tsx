import { useRoutes } from "react-router-dom";
import { Dashboardlayout } from "../components";
import Dashboardhome from "../pages/Dashboard/Dashboardhome";
import Login from "../pages/Auth/Login";
import Welcome from "../pages/Auth/Welcome";
import Stores from "../pages/Dashboard/Stores";
import Wallet from "../pages/Dashboard/Wallet";
import Messages from "../pages/Dashboard/Messages";

const Routes = () => {
    let element = useRoutes([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/welcome",
            element: <Welcome />
        },
        {
           path: "/dashboard",
           element: <Dashboardlayout />,
           children: [
               {
                index: true,
                element: <Dashboardhome />
               },
               {
                   path: "/dashboard/stores",
                   element: <Stores />
               },
               {
                   path: "/dashboard/wallet",
                   element: <Wallet />
               },
               {
                   path: "/dashboard/messages",
                   element: <Messages />
               }
           ]
        }
    ])
    return element
}

export default Routes