const Banner = () => {
  return (
    <div
      className="hero rounded-xl "
      style={{
        backgroundImage: "url(https://i.ibb.co/HNdFxT2/Banner.png)",
      }}
    >
      <div className="hero-overlay  bg-black rounded-xl bg-opacity-70"></div>
      <div className="hero-content  text-center py-10 md:py-24 lg:py-36 text-neutral-content">
        <div className="max-w-3xl z-0">
          <h1 className="mb-5 text-5xl font-bold">
            Give the Gift of Life <br />
            Donate Blood Today
          </h1>
          <p className="mb-5 text-xl">
            Your simple act of donation can save lives and contribute to a
            healthier, united community. Join us in this noble cause, where
            every drop you give becomes a lifeline for someone in need.
          </p>
          <div className="flex justify-center items-center gap-5 flex-col md:flex-row">
            <button className="btn glass text-white bg-emerald-800 hover:bg-black">
              Join as a Donor
            </button>
            <button className="btn glass text-white bg-cyan-800 hover:bg-black">
              Search Donor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
