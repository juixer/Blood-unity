import Container from "../../Shared/COntainer/Container";

const RequestInfo = () => {
  return (
    <div>
      <Container>
        <h1 className="text-center text-5xl font-bold mb-5">Request Details</h1>
        <div
          className="hero rounded-xl"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/Xs78L81/detailgif.gif)",
          }}
        >
          <div className="hero-overlay bg-opacity-70 rounded-xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-3xl">
              <div className="space-y-3">
                <h1 className="text-xl">
                  <span className="font-bold">Requester Name:</span> Arian Asi
                </h1>
                <h1 className="text-xl">
                  {" "}
                  <span className="font-bold">Requester Email:</span>
                  arian.0011@gmail.com
                </h1>
                <h1 className="text-xl">
                  <span className="font-bold">Recipient Name:</span> Arman
                  Khandokar
                </h1>
                <h1 className="text-xl">
                  <span className="font-bold">Recipient District:</span> Comilla
                </h1>
                <h1 className="text-xl">
                  <span className="font-bold">Hospital:</span> Tonmmoy AKA
                  Hospital
                </h1>
                <h1 className="text-xl">
                  <span className="font-bold">Full Address:</span> Bus
                  Stand,Comilla
                </h1>
                <h1 className="text-xl">
                  <span className="font-bold">Donate Date:</span> 69-07-2024
                </h1>
                <h1 className="text-xl">
                  <span className="font-bold">Donate Time:</span> 12:00AM
                </h1>
                <p className="text-xl">
                  <span className="font-bold">Requester Message:</span>যদি আপনি কেউ আপনার লক্ষ্যে পৌঁছাতে চান তবে সঠিক দিকে চলুন, আর কেবল একটি পদক্ষেপ নিন সঠিক দিকে।
                </p>
              </div>
              <button className="btn glass mt-5 bg-emerald-600 w-full hover:bg-emerald-800 text-white">
                Donate
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RequestInfo;
