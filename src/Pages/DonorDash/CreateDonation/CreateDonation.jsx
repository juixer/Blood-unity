import Lottie from "lottie-react";
import donationAni from "../../../assets/donationAni.json";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { useState } from "react";
import Select from "react-select";
const CreateDonation = () => {
  const [bloodType, setBloodType] = useState("");
  const [district, setDistrict] = useState("");

  const handleBloodType = (selectedOption) => {
    setBloodType(selectedOption.value);
  };

  const handleDistrict = (selectedOption) => {
    setDistrict(selectedOption.value);
  };

  const { user } = useAuth();

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
    <div className="mt-10">
      <h1 className="text-5xl text-center font-bold">
        Create Blood Donation Request
      </h1>
      <div className="flex flex-col mt-5 md:flex-row gap-5 items-center justify-center p-5 shadow-2xl shadow-red-300 rounded-xl">
        <div className="w-full">
          <Lottie animationData={donationAni} loop={true} />
        </div>
        <div className="w-full">
          <form className="space-y-5">
            <div className="space-y-2">
              <h4 className="font-bold">
                Your Name<span className="font-bold text-red-500">*</span>
              </h4>
              <input
                type="text"
                placeholder="Type here"
                defaultValue={user.displayName}
                readOnly
                disabled
                className="input input-bordered w-full bg-gray-200"
              />
            </div>

            <div className="space-y-2">
              <h4 className="font-bold">
                Your Email<span className="font-bold text-red-500">*</span>
              </h4>
              <input
                type="text"
                placeholder="Type here"
                defaultValue={user.email}
                readOnly
                disabled
                className="input input-bordered w-full bg-gray-200"
              />
            </div>

            <div className="space-y-2">
              <h4 className="font-bold">
                Recipient Name<span className="font-bold text-red-500">*</span>
              </h4>
              <input
                type="text"
                required
                placeholder="Type here"
                className="input input-bordered  w-full "
              />
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <div className="space-y-2 w-full">
                <h4 className="font-semibold">
                  Blood Type<span className="font-bold text-red-500">*</span>
                </h4>
                <Select
                  required
                  onChange={handleBloodType}
                  options={bloodTypes}
                />
              </div>

              <div className="space-y-2 w-full">
                <h4 className="font-semibold">
                  District<span className="font-bold text-red-500">*</span>
                </h4>
                <Select
                  required
                  onChange={handleDistrict}
                  options={districts}
                />
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold">
                Hospital Name<span className="font-bold text-red-500">*</span>
              </h4>
              <input
                type="text"
                required
                placeholder="Type here"
                className="input input-bordered  w-full "
              />
            </div>

            <div className="space-y-2">
              <h4 className="font-bold">
                Full Address<span className="font-bold text-red-500">*</span>
              </h4>
              <input
                type="text"
                required
                placeholder="Type here"
                className="input input-bordered  w-full "
              />
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <div className="space-y-2 w-full">
                <h4 className="font-bold">
                  Doantion Date<span className="font-bold text-red-500">*</span>
                </h4>
                <input
                  type="date"
                  required
                  placeholder="Type here"
                  className="input input-bordered  w-full "
                />
              </div>

              <div className="space-y-2 w-full">
                <h4 className="font-bold">
                  Doantion Time<span className="font-bold text-red-500">*</span>
                </h4>
                <input
                  type="time"
                  required
                  placeholder="Type here"
                  className="input input-bordered  w-full "
                />
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold">Request Message</h4>
              <textarea
                className="textarea textarea-bordered w-full h-36"
                placeholder="Type your message"
              ></textarea>
            </div>

            <button className="btn glass bg-red-600 hover:bg-red-800 text-white w-full">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateDonation;
