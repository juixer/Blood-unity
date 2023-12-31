import Lottie from "lottie-react";
import Container from "../../Shared/COntainer/Container";
import loginAni from "../../assets/loginANi.json";
import { FaEnvelope, FaLock } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const Login = () => {

  const {signIn} = useAuth();

  const navigate = useNavigate()
  const location = useLocation()

  const {
    register,
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
      const email = data.email;
      const password = data.password;

      signIn(email, password)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged in successfully",
          showConfirmButton: false,
          timer: 2500,
        });
        navigate(location.state ? location.state : '/')
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
  return (
    <div>
      <Container>
        <h1 className="text-5xl font-bold text-center">Login</h1>
        <div className="flex flex-col mt-5 md:flex-row gap-5 items-center justify-center p-5 shadow-2xl shadow-red-300 rounded-xl">
          <div className="w-full">
            <Lottie animationData={loginAni} loop={true} />
          </div>
          <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-5">
              <div>
                <h4 className="font-semibold">Email</h4>
                <div className="relative">
                  <FaEnvelope className=" absolute left-3 top-4 text-xl" />
                  <input
                    type="email"
                    required
                    {...register('email')}
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
                    required
                    {...register('password')}
                    placeholder="Type your password here"
                    className="input input-bordered pl-10 w-full"
                  />
                </div>
              </div>

              <button className="btn glass bg-red-500 w-full hover:bg-red-800 text-white font-semibold">
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
