import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DonationRequest from "../Pages/DonationRequest/DonationRequest";
import RequestInfo from "../Pages/RequestInfo/RequestInfo";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
      },
      {
        path: '/details',
        element: <RequestInfo/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element:  <Register/>
      }
    ],
  },
]);

export default Router;
