import { useRoutes } from "react-router-dom";
import { Dashboardlayout } from "../components";
import Dashboardhome from "../pages/Dashboard/Dashboardhome";
import Login from "../pages/Auth/Login";

const Routes = () => {
    let element = useRoutes([
        {
            path: "/",
            element: <Login />
        },
        {
           path: "/agent",
           element: <Dashboardlayout />,
           children: [
               {
                index: true,
                element: <Dashboardhome />
            }
           ]
        }
    ])
    return element
}

export default Routes