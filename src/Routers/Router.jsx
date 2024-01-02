import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DonationRequest from "../Pages/DonationRequest/DonationRequest";
import RequestInfo from "../Pages/RequestInfo/RequestInfo";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import DashRoot from "../Layout/DashRoot";
import DashboardHome from "../Pages/DashBoardHome/DashboardHome";
import DonorDash from "../Pages/DonorDash/DashBoard/DonorDash";
import DonorRequest from "../Pages/DonorDash/DonationRequest/DonorRequest";
import CreateDonation from "../Pages/DonorDash/CreateDonation/CreateDonation";
import UpdateDonation from "../Pages/DonorDash/UpdateDonation/UpdateDonation";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/donationRequest",
        element: <DonationRequest />,
      },
      {
        path: "/details/:id",
        element: <RequestInfo />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/donation/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard/",
    element: (
      <PrivateRoute>
        <DashRoot />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/",
        element: (
          <PrivateRoute>
            <DashboardHome />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/donorDashboard",
        element: (
          <PrivateRoute>
            <DonorDash />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/donationRequest",
        element: (
          <PrivateRoute>
            <DonorRequest />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/createRequest",
        element: (
          <PrivateRoute>
            <CreateDonation />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/updateDonation/:id",
        element: (
          <PrivateRoute>
            <UpdateDonation />
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`http://localhost:5000/donation/${params.id}`),
      },
    ],
  },
]);

export default Router;
