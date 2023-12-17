import Lottie from "lottie-react";
import donationAni from "../../../assets/donationAni.json";
const CreateDonation = () => {
  return (
    <div className="mt-10">
      <h1 className="text-5xl text-center font-bold">
        Create Blood Donation Request
      </h1>
      <div className="flex justify-center items-center gap-10">
        <div>
          <Lottie animationData={donationAni} loop={true} />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CreateDonation;
