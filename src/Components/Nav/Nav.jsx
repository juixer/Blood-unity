import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";

const Nav = () => {
  const { user, logout } = useAuth();

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
  }
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/donationRequest"}>Donation Request</NavLink>
      </li>
      <li>
        <NavLink to={"/blogs"}>Blogs</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={"/funding"}>Funding</NavLink>
      </li>
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt={user?.displayName} src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content text-black bg-base-100 rounded-box w-52"
            >
              <li>
                <p className="justify-between">{user?.displayName}</p>
                <hr/>
                <p className="justify-between">{user?.email}</p>
              </li>
              <hr/>
              <li>
                <a onClick={handleSignOut}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <li>
            <Link to={"/login"}>
              <button className="btn glass btn-sm text-white bg-red-500 hover:bg-red-800">
                Log In
              </button>
            </Link>
          </li>
        )}
    </>
  );
  return (
    <div className="drawer bg-black bg-opacity-50 fixed z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar">
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
            <NavLink to={"/"}>
              <img src="https://i.ibb.co/4NnW0BM/logo.png" className="w-28" />
            </NavLink>
          </div>
          <div className="flex-none hidden lg:block">
            <ul
              id="sidebar"
              className="menu text-white space-x-3 menu-horizontal text-lg font-semibold"
            >
              {navLinks}
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-72 min-h-full bg-base-200">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Nav;
