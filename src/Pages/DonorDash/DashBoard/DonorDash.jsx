import { FaEye, FaPencil, FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { axiosPublic } from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { useQuery } from "@tanstack/react-query";
import { PropagateLoader } from "react-spinners";
import Swal from "sweetalert2";

const DonorDash = () => {
  const { user } = useAuth();
  const {
    isPending,
    error,
    refetch,
    data: yourDonation = [],
  } = useQuery({
    queryKey: ["yourDonation"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/donations/${user.email}`);
      return res.data;
    },
  });

  if (isPending) {
    return (
      <div className="flex justify-center items-center py-52">
        <PropagateLoader color="#ff0004" />
      </div>
    );
  }
  if (error) {
    return console.log(error.message);
  }

  const handleDeleteDonation = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/donation/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your Donation has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="mt-10 max-w-screen-2xl mx-auto">
      <h1 className="text-5xl font-bold text-center">
        Your Recent Donation Request
      </h1>

      {/* TABLE */}

      <div className="overflow-x-auto mt-5 shadow-2xl shadow-red-300">
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
            {yourDonation.map((donation, i) => {
              return (
                <tr key={donation._id} className="hover">
                  <th>{i + 1}</th>
                  <td>{donation.recipient_name}</td>
                  <td>{donation.full_address}</td>
                  <td>{donation.donation_date}</td>
                  <td>{donation.donation_time}</td>
                  <td>{donation.donation_status}</td>
                  <td></td>
                  <td></td>
                  <td>
                    <button className="btn glass bg-emerald-600 btn-sm hover:bg-emerald-800 text-white">
                      <FaPencil />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteDonation(donation._id)}
                      className="btn glass bg-red-600 btn-sm hover:bg-red-800 text-white"
                    >
                      <FaTrashCan />
                    </button>
                  </td>
                  <td>
                    <Link to={`/details/${donation._id}`}>
                      <button className="btn glass bg-cyan-600 btn-sm hover:bg-cyan-800 text-white">
                        <FaEye />
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center my-5">
        <Link to={"/dashboard/donationRequest"}>
          <button className="uppercase btn glass bg-red-500 text-white hover:bg-red-800">
            View all my request
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DonorDash;
