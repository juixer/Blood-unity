import { Link } from "react-router-dom";
import Container from "../../Shared/COntainer/Container";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa6";
import Lottie from "lottie-react";
import registerAni from "../../assets/registerAni.json";
import Select from "react-select";

const Register = () => {
  const districts = [
    { value: "Comilla", label: "Comilla" },
    { value: "Feni", label: "Feni" },
    { value: "Brahmanbaria", label: "Brahmanbaria" },
    { value: "Rangamati", label: "Rangamati" },
    { value: "Noakhali", label: "Noakhali" },
    { value: "Chandpur", label: "Chandpur" },
    { value: "Lakshmipur", label: "Lakshmipur" },
    { value: "Chattogram", label: "Chattogram" },
    { value: "Coxsbazar", label: "Coxsbazar" },
    { value: "Khagrachhari", label: "Khagrachhari" },
    { value: "Bandarban", label: "Bandarban" },
    { value: "Sirajganj", label: "Sirajganj" },
    { value: "Pabna", label: "Pabna" },
    { value: "Bogura", label: "Bogura" },
    { value: "Rajshahi", label: "Rajshahi" },
    { value: "Natore", label: "Natore" },
    { value: "Joypurhat", label: "Joypurhat" },
    { value: "Chapainawabganj", label: "Chapainawabganj" },
    { value: "Naogaon", label: "Naogaon" },
    { value: "Jashore", label: "Jashore" },
    { value: "Satkhira", label: "Satkhira" },
    { value: "Meherpur", label: "Meherpur" },
    { value: "Narail", label: "Narail" },
    { value: "Chuadanga", label: "Chuadanga" },
    { value: "Kushtia", label: "Kushtia" },
    { value: "Magura", label: "Magura" },
    { value: "Khulna", label: "Khulna" },
    { value: "Bagerhat", label: "Bagerhat" },
    { value: "Jhenaidah", label: "Jhenaidah" },
    { value: "Jhalakathi", label: "Jhalakathi" },
    { value: "Patuakhali", label: "Patuakhali" },
    { value: "Pirojpur", label: "Pirojpur" },
    { value: "Barisal", label: "Barisal" },
    { value: "Bhola", label: "Bhola" },
    { value: "Barguna", label: "Barguna" },
    { value: "Sylhet", label: "Sylhet" },
    { value: "Moulvibazar", label: "Moulvibazar" },
    { value: "Habiganj", label: "Habiganj" },
    { value: "Sunamganj", label: "Sunamganj" },
    { value: "Narsingdi", label: "Narsingdi" },
    { value: "Gazipur", label: "Gazipur" },
    { value: "Shariatpur", label: "Shariatpur" },
    { value: "Narayanganj", label: "Narayanganj" },
    { value: "Tangail", label: "Tangail" },
    { value: "Kishoreganj", label: "Kishoreganj" },
    { value: "Manikganj", label: "Manikganj" },
    { value: "Dhaka", label: "Dhaka" },
    { value: "Munshiganj", label: "Munshiganj" },
    { value: "Rajbari", label: "Rajbari" },
    { value: "Madaripur", label: "Madaripur" },
    { value: "Gopalganj", label: "Gopalganj" },
    { value: "Faridpur", label: "Faridpur" },
    { value: "Panchagarh", label: "Panchagarh" },
    { value: "Dinajpur", label: "Dinajpur" },
    { value: "Lalmonirhat", label: "Lalmonirhat" },
    { value: "Nilphamari", label: "Nilphamari" },
    { value: "Gaibandha", label: "Gaibandha" },
    { value: "Thakurgaon", label: "Thakurgaon" },
    { value: "Rangpur", label: "Rangpur" },
    { value: "Kurigram", label: "Kurigram" },
    { value: "Sherpur", label: "Sherpur" },
    { value: "Mymensingh", label: "Mymensingh" },
    { value: "Jamalpur", label: "Jamalpur" },
    { value: "Netrokona", label: "Netrokona" },
  ];
  const bloodTypes = [
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" },
  ];

  return (
    <div>
      <Container>
        <h1 className="text-5xl font-bold text-center">Register</h1>
        <div className="flex flex-col md:flex-row-reverse gap-5 items-center shadow-red-300 justify-center p-5 shadow-2xl rounded-xl">
          <div className="w-full">
            <Lottie animationData={registerAni} loop={true} />
          </div>
          <div className="w-full">
            <form className="mt-5 space-y-5">
              <div>
                <h4 className="font-semibold">Name</h4>
                <div className="relative">
                  <FaUser className=" absolute left-3 top-4 text-xl" />
                  <input
                    type="text"
                    placeholder="Type your Name here"
                    className="input input-bordered pl-10 w-full"
                  />
                </div>
              </div>
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
                <h4 className="font-semibold">Profile Picture</h4>
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-error w-full"
                />
              </div>

              <div>
                <h4 className="font-semibold">Blood Type</h4>
                <Select options={bloodTypes} />
              </div>

              <div>
                <h4 className="font-semibold">District</h4>
                <Select options={districts} />
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
              <div>
                <h4 className="font-semibold">Confirm Password</h4>
                <div className="relative">
                  <FaLock className=" absolute left-3 top-4 text-xl" />
                  <input
                    type="password"
                    placeholder="Type confirm password here"
                    className="input input-bordered pl-10 w-full"
                  />
                </div>
              </div>

              <button className="btn glass bg-red-500 w-full hover:bg-red-800 text-white font-semibold">
                Register
              </button>
            </form>
            <p className="mt-5 text-xl">
              Already have an account?
              <Link to={"/login"}>
                <span className="ml-3 text-emerald-600 font-bold hover:underline">
                  Log In
                </span>
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
