import Lottie from "lottie-react";
import contactAni from "../../../../assets/contactAni.json";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone, FaSquareXTwitter } from "react-icons/fa6";
const ContactUs = () => {
  return (
    <div className="py-5">
      <h1 className="text-5xl text-center font-bold">Contact Us</h1>
      <div className="mt-5 flex justify-evenly items-center flex-col md:flex-row gap-5">
        <div>
          <h1 className="text-3xl font-semibold">Get in touch</h1>
          <div className="space-y-3 mt-3">
            <p className="flex justify-start items-center gap-3 text-xl">
              <FaEnvelope className="text-4xl border-2 border-black rounded-full p-1" />{" "}
              bloodunity@gmail.com
            </p>
            <p className="flex justify-start items-center gap-3 text-xl">
              <FaPhone className="text-4xl border-2 border-black rounded-full p-1" />{" "}
              +880234767123
            </p>
            <p className="flex justify-start items-center gap-3 text-xl">
              <FaLocationArrow className="text-4xl border-2 border-black rounded-full p-1" />{" "}
              42 Unity Street, Dhaka, Bangladesh
            </p>
            <div className="flex justify-center items-center md:justify-start gap-2">
            <FaFacebook className="text-4xl border-2 border-black rounded-full p-1 hover:animate-spin " />
            <FaSquareXTwitter className="text-4xl border-2 border-black rounded-full p-1 hover:animate-spin " />
            <FaLinkedin className="text-4xl border-2 border-black rounded-full p-1 hover:animate-spin " />
            <FaInstagram className="text-4xl border-2 border-black rounded-full p-1 hover:animate-spin " />
            </div>
          </div>
        </div>
        <div>
          <Lottie animationData={contactAni} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
