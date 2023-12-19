import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../useAxiosPublic/useAxiosPublic";

const useDonationReq = () => {
    const { isPending, error, data : donations = [] } = useQuery({
        queryKey: ['donation_request'],
        queryFn: async () => {
            const res = await axiosPublic.get('/donations')
            return res.data
        }
         
      })
      return { isPending, error, donations }
};

export default useDonationReq;