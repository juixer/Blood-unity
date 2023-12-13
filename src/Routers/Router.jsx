import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DonationRequest from "../Pages/DonationRequest/DonationRequest";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'/donationRequest',
        element: <DonationRequest/>
      }
    ],
  },
]);

export default Router;
