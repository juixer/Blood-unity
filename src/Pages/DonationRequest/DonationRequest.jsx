import axios from "axios";
import Container from "../../Shared/COntainer/Container";
import Select from "react-select";
import { useState } from "react";
const DonationRequest = () => {
  const [reqs, setReqs] = useState([]);
  axios.get("fakeReq.json").then((res) => {
    setReqs(res.data);
  });
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
    <div className="my-10">
      <Container>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className=" w-full lg:w-1/4 ">
            <form className="space-y-5">
              <div className="space-y-2">
                <p className="font-semibold text-lg">Blood Types</p>
                <Select options={bloodTypes} />
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-lg">Location</p>
                <Select options={districts} />
              </div>
              <button className="btn bg-emerald-600 hover:bg-emerald-800 w-full text-white glass">
                Filter
              </button>
            </form>
          </div>
          <div className=" max-w-5xl mx-auto w-full lg:w-3/4 shadow-xl">
            <h1 className="text-5xl font-bold text-center mb-5">
              Donation Requests
            </h1>

            <div className="overflow-x-auto roux">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Requester Name</th>
                    <th>Type</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  {reqs.map((req, i) => {
                    return (
                      <tr key={req.id} className="hover">
                        <th>{i + 1}</th>
                        <td>{req.requesterName}</td>
                        <td>{req.type}</td>
                        <td>{req.location}</td>
                        <td>{req.date}</td>
                        <td>{req.time}</td>
                        <td>
                          <button className="btn bg-sky-600 text-white hover:bg-sky-800 glass">
                            View Details
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DonationRequest;
