import { Link, NavLink } from "react-router-dom";

const Nav = () => {
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
      <li>
        <Link to={"/login"}><button className="btn glass btn-sm text-white bg-emerald-600 hover:bg-emerald-800">Log In</button></Link>
      </li>
    </>
  );
  return (
    <div className="drawer bg-black bg-opacity-60 fixed z-50">
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
            <NavLink to={'/'}>
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
        <ul className="menu p-4 w-80 min-h-full bg-base-200">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Nav;
