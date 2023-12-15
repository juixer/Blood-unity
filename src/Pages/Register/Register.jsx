import { Link } from "react-router-dom";
import Container from "../../Shared/COntainer/Container";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa6";
import Lottie from "lottie-react";
import registerAni from "../../assets/registerAni.json";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { axiosPublic } from "../../Hooks/useAxiosPublic/useAxiosPublic";
import useAuth from "../../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";

const Register = () => {
  const [bloodType, setBloodType] = useState("");
  const [district, setDistrict] = useState("");
  const { signUp, updateUser } = useAuth();

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

  const handleBloodType = (selectedOption) => {
    setBloodType(selectedOption.value);
  };

  const handleDistrict = (selectedOption) => {
    setDistrict(selectedOption.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    const confirm = data.confirm;
    const name = data.name;

    if (password !== confirm) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `Password dose not matched`,
        showConfirmButton: false,
        timer: 2500,
      });
    } else {
      const imgFile = { image: data.photo[0] };
      const imgRes = await axiosPublic.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBBAPI}`,
        imgFile,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (imgRes.data.success) {
        const image = imgRes.data.data.url;
        signUp(email, password)
          .then(() => {
            updateUser(name, image)
              .then(() => {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Account Created Successfully",
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
    }
  };
  return (
    <div>
      <Container>
        <h1 className="text-5xl font-bold text-center">Register</h1>
        <div className="flex flex-col md:flex-row-reverse mt-5 gap-5 items-center shadow-red-300 justify-center p-5 shadow-2xl rounded-xl">
          <div className="w-full">
            <Lottie animationData={registerAni} loop={true} />
          </div>
          <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-5">
              <div>
                <h4 className="font-semibold">
                  Name<span className="font-bold text-red-500">*</span>
                </h4>
                <div className="relative">
                  <FaUser className=" absolute left-3 top-4 text-xl" />
                  <input
                    type="text"
                    required
                    {...register("name")}
                    placeholder="Type your Name here"
                    className="input input-bordered pl-10 w-full"
                  />
                </div>
              </div>
              <div>
                <h4 className="font-semibold">
                  Email<span className="font-bold text-red-500">*</span>
                </h4>
                <div className="relative">
                  <FaEnvelope className=" absolute left-3 top-4 text-xl" />
                  <input
                    type="email"
                    required
                    {...register("email")}
                    placeholder="Type your email here"
                    className="input input-bordered pl-10 w-full"
                  />
                </div>
              </div>

              <div>
                <h4 className="font-semibold">
                  Profile Picture
                  <span className="font-bold text-red-500">*</span>
                </h4>
                <input
                  type="file"
                  required
                  {...register("photo")}
                  className="file-input file-input-bordered file-input-error w-full"
                />
              </div>

              <div>
                <h4 className="font-semibold">
                  Blood Type<span className="font-bold text-red-500">*</span>
                </h4>
                <Select
                  name="blood"
                  onChange={handleBloodType}
                  required
                  options={bloodTypes}
                />
              </div>

              <div>
                <h4 className="font-semibold">
                  District<span className="font-bold text-red-500">*</span>
                </h4>
                <Select
                  required
                  name="district"
                  onChange={handleDistrict}
                  options={districts}
                />
              </div>

              <div>
                <h4 className="font-semibold">
                  Password<span className="font-bold text-red-500">*</span>
                </h4>
                <div className="relative">
                  <FaLock className=" absolute left-3 top-4 text-xl" />
                  <input
                    type="password"
                    required
                    {...register("password", {
                      pattern: {
                        value:
                          /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d).{8,}$/,
                        message: "Password must meet the specified criteria",
                      },
                    })}
                    placeholder="Type your password here"
                    className="input input-bordered pl-10 w-full"
                  />
                  <span className="text-gray-500 text-justify">
                    Please Provide atleast 8 characters, 1 uppercase letter, 1
                    special character, and 1 number.
                  </span>
                  <br />
                  {errors.password && <span className="text-red-500 font-semibold">{errors.password.message}</span>}
                </div>
              </div>
              <div>
                <h4 className="font-semibold">
                  Confirm Password
                  <span className="font-bold text-red-500">*</span>
                </h4>
                <div className="relative">
                  <FaLock className=" absolute left-3 top-4 text-xl" />
                  <input
                    type="password"
                    required
                    {...register("confirm")}
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
