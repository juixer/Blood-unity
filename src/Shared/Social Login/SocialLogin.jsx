import { FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
    return (
        <div className="flex justify-center items-center mt-3">
            <FaGoogle className="text-5xl border-2 border-black rounded-full p-1 hover:animate-pulse text-emerald-600 hover:text-yellow-600"/>
        </div>
    );
};

export default SocialLogin;