import { FaEye, FaPencil, FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

const DonorDash = () => {
  return (
    <div className="mt-10 max-w-screen-2xl mx-auto">
      <h1 className="text-5xl font-bold text-center">
        Your Recent Donation Request
      </h1>

      {/* TABLE */}

      <div className="overflow-x-auto mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Recipient Name</th>
              <th>Recipient Location</th>
              <th>Donation Date</th>
              <th>Donation Time</th>
              <th>Donation Status</th>
              <th>Donor Name</th>
              <th>Donor Email</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <th>1</th>
              <td>Hart Hagerty</td>
              <td>Dhaka</td>
              <td>10-10-2023</td>
              <td>10:10 am</td>
              <td>pending</td>
              <td>Goku</td>
              <td>Goku@gmail.com</td>
              <td>
                <button className="btn glass bg-emerald-600 btn-sm hover:bg-emerald-800 text-white">
                  <FaPencil />
                </button>
              </td>
              <td>
                <button className="btn glass bg-red-600 btn-sm hover:bg-red-800 text-white">
                  <FaTrashCan />
                </button>
              </td>
              <td>
                <button className="btn glass bg-cyan-600 btn-sm hover:bg-cyan-800 text-white">
                  <FaEye />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center my-5">
        <Link to={'/dashboard/donationRequest'}>
          <button className="uppercase btn glass bg-red-500 text-white hover:bg-red-800">
            View all my request
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DonorDash;
