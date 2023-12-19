import { useLoaderData } from "react-router-dom";
import Container from "../../Shared/COntainer/Container";

const RequestInfo = () => {

  const donation = useLoaderData()
  return (
    <div>
      <Container>
        <h1 className="text-center text-5xl font-bold mb-5">Request Details</h1>
        <div
          className="hero rounded-xl"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/PQt8Jx0/infoGIf.gif)",
          }}
        >
          <div className="hero-overlay bg-opacity-80 rounded-xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-3xl">
              <div className="space-y-3">
                <h1 className="text-xl">
                  <span className="font-bold">Requester Name:</span> {donation.requester_name}
                </h1>
                <h1 className="text-xl">
                  
                  <span className="font-bold">Requester Email:</span> {" "}
                   {donation.requester_email}
                </h1>
                <h1 className="text-xl">
                  <span className="font-bold">Recipient Name:</span> {donation.recipient_name}
                </h1>
                <h1 className="text-xl">
                  <span className="font-bold">Blood Type:</span> {donation.bloodType}
                </h1>
                <h1 className="text-xl">
                  <span className="font-bold">Recipient District:</span> {donation.district}
                </h1>
                <h1 className="text-xl">
                  <span className="font-bold">Hospital:</span> {donation.hospital_name}
                </h1>
                <h1 className="text-xl">
                  <span className="font-bold">Full Address:</span> {donation.full_address}
                </h1>
                <h1 className="text-xl">
                  <span className="font-bold">Donate Date:</span> {donation.donation_data}
                </h1>
                <h1 className="text-xl">
                  <span className="font-bold">Donate Time:</span> {donation.donation_time}
                </h1>
                <p className="text-xl">
                  <span className="font-bold">Requester Message:</span> {donation.message}
                </p>
              </div>
              <button className="btn glass mt-5 bg-red-500 w-full hover:bg-red-800 text-white">
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
