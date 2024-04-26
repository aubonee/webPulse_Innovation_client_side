import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./UseAxiosSecure";


const useHr = () => {
    const { user,loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isHr, isPending: isHrLoading } = useQuery({
        queryKey: [user?.email, 'isHr'],
        enabled:!loading && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/ahr/${user.email}`);
          
            return res.data?.hr;
        }
    })
    return [isHr, isHrLoading]
};

export default useHr;