import Lottie from "lottie-react";
import errAni from "../../assets/errPage.json";
import { FaArrowLeft, FaHouse } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
    const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center flex-col gap-5 py-44">
      <Lottie animationData={errAni} loop={true} />
      <h1 className="text-5xl font-bold text-center">
        {" "}
        OOPS!!! <br />
        Something went wrong
      </h1>

      <div className="join join-vertical lg:join-horizontal">
        <button className="btn join-item" onClick={()=> {navigate(-1)}}>
          <FaArrowLeft />
          Go Back
        </button>
        <button className="btn join-item" onClick={()=> {navigate('/')}}>
          <FaHouse />
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
