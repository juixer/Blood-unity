import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Nav />
      <div className="max-w-screen-2xl mx-auto px-3 py-24">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Root;
