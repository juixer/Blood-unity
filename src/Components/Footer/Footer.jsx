import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-black bg-opacity-25">
      <footer className="footer p-10 max-w-screen-xl mx-auto text-base-content">
        <aside>
          <img src="https://i.ibb.co/4NnW0BM/logo.png" className="w-36" />
          <p>
            Blood Unity Ltd.
            <br />
            Blood Donation Community since 2022
          </p>
        </aside>
        <nav>
          <header className="footer-title">Quick Link</header>
          <ul className="space-y-1">
            <li>
              <Link to={"/"} className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/donationRequest"} className="hover:underline">
                Donation Request
              </Link>
            </li>
            <li>
              <Link to={"/blogs"} className="hover:underline">
                Blogs
              </Link>
            </li>
            <li>
              <Link to={"/dashboard"} className="hover:underline">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to={"/funding"} className="hover:underline">
                Funding
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <header className="footer-title">Find us</header>
          <div className="flex justify-center items-center md:justify-start gap-2">
            <FaFacebook className="text-4xl border-2 border-black rounded-full p-1 hover:animate-spin " />
            <FaSquareXTwitter className="text-4xl border-2 border-black rounded-full p-1 hover:animate-spin " />
            <FaLinkedin className="text-4xl border-2 border-black rounded-full p-1 hover:animate-spin " />
            <FaInstagram className="text-4xl border-2 border-black rounded-full p-1 hover:animate-spin " />
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center pb-4 text-base-content">
        <aside>
          <p>Copyright © {year} - All right reserved by Blood Unity Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
