import { Outlet } from "react-router-dom";
import DashNav from "../Components/DashNav/DashNav";

const DashRoot = () => {
  return (
    <div>
      <DashNav />
      <div className="max-w-screen-2xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashRoot;
