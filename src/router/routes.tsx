import { useRoutes } from "react-router-dom";
import { Dashboardlayout } from "../components";
import Dashboardhome from "../pages/Dashboard/Dashboardhome";

const Routes = () => {
    let element = useRoutes([
        {
           path: "/",
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