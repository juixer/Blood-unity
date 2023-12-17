import { FaEye, FaPencil, FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

const DonorRequest = () => {
  return (
    <div className="mt-10">
      <h1 className="text-5xl font-bold text-center">Your Donation Requests</h1>

      <div className="mt-5 flex justify-end px-5">
        <select className="select select-error w-full max-w-[150px]">
          <option disabled selected>
            Select
          </option>
          <option>All</option>
          <option>Pending</option>
          <option>Inprogress</option>
          <option>Done</option>
          <option>Canceled</option>
        </select>
      </div>

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
                <Link to={"/details"}>
                  {" "}
                  <button className="btn glass bg-cyan-600 btn-sm hover:bg-cyan-800 text-white">
                    <FaEye />
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonorRequest;
