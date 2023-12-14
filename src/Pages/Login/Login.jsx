import Lottie from "lottie-react";
import Container from "../../Shared/COntainer/Container";
import loginAni from "../../assets/loginANi.json";
import { FaEnvelope, FaLock } from "react-icons/fa6";
import SocialLogin from "../../Shared/Social Login/SocialLogin";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center p-5 shadow-2xl rounded-xl">
          <div className="w-full">
            <Lottie animationData={loginAni} loop={true} />
          </div>
          <div className="w-full">
            <h1 className="text-5xl font-bold text-center">Login</h1>
            <form className="mt-5 space-y-5">
              <div>
                <h4 className="font-semibold">Email</h4>
                <div className="relative">
                  <FaEnvelope className=" absolute left-3 top-4 text-xl" />
                  <input
                    type="email"
                    placeholder="Type your email here"
                    className="input input-bordered pl-10 w-full"
                  />
                </div>
              </div>

              <div>
                <h4 className="font-semibold">Password</h4>
                <div className="relative">
                  <FaLock className=" absolute left-3 top-4 text-xl" />
                  <input
                    type="password"
                    placeholder="Type your password here"
                    className="input input-bordered pl-10 w-full"
                  />
                </div>
              </div>

              <button className="btn glass bg-emerald-600 w-full hover:bg-emerald-800 text-white font-semibold">
                Log In
              </button>
            </form>
            <p className="mt-5 text-xl">
              Do not have an account?
              <Link to={"/register"}>
                <span className="ml-3 text-emerald-600 font-bold hover:underline">
                  Create an account
                </span>
              </Link>
            </p>
            <div className="divider"></div>
            <p className="text-center text-3xl font-bold">Login with</p>
            <SocialLogin />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
