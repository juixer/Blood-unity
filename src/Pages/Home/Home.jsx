import Banner from "./Home Components/Banner/Banner";
import ContactUs from "./Home Components/Contactus/ContactUs";
import Feature from "./Home Components/Feature/Feature";

const Home = () => {
    return (
        <div className="space-y-5 z-0">
            <Banner/>
            <Feature/>
            <ContactUs/>
        </div>
    );
};

export default Home;