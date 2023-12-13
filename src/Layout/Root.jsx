import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";

const Root = () => {
  return (
    <div>
      <Nav />
      <div className="max-w-screen-2xl mx-auto px-3 py-16">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
