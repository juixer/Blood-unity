import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";

const DashNav = () => {
  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleSignOut = () => {
    logout()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged out",
          showConfirmButton: false,
          timer: 2500,
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 2500,
        });
      });
  };

  const user = {
    // admin: "admin",
    donor: "donor",
  };

  const DashLink = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {user.donor && (
        <>
          <li>
            <NavLink to={"/dashboard/donorDashboard"}>DashBoard</NavLink>
          </li>
          <li>
            <NavLink to={'/dashboard/donationRequest'}>Donation Request</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/dashboard"}>Create Donation</NavLink>
          </li>
        </>
      )}

      {user.admin && (
        <>
          <li>
            <NavLink to={"/dashboard/dashboard"}>DashBoard</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/dashboard"}>All Users</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/dashboard"}>All Donation Request</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/dashboard"}>Content Management</NavLink>
          </li>
        </>
      )}

      <button
        className=" px-3 rounded-xl py-1 glass bg-red-600 hover:bg-red-800 text-white"
        onClick={handleSignOut}
      >
        Logout
      </button>
    </>
  );

  return (
    <div className="drawer z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-black bg-opacity-50">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <p className="text-2xl font-bold text-white">
              Dash<span className="text-red-500">Board</span>
            </p>
          </div>
          <div className="flex-none hidden lg:block">
            <ul
              id="sidebar"
              className="menu text-white text-lg space-x-3 menu-horizontal"
            >
              {DashLink}
            </ul>
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-72 min-h-full bg-base-200">{DashLink}</ul>
      </div>
    </div>
  );
};

export default DashNav;
