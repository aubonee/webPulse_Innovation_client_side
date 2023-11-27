
import UseAuth from './UseAuth';
import useAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useUserData = () => {
   



const axiosSecure =useAxiosSecure();
    
   
      
const { data:users=[] , refetch}=useQuery({
  //refetch
  queryKey:['users'],
  queryFn:async ()=>{
      const res =await axiosSecure.get('/users');
      return res.data

  }
})
return [users, refetch]
}

export default useUserData;