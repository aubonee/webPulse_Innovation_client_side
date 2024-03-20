import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: 'https://assignment-12-server-side-five.vercel.app'
    baseURL:'https://assignment-12-server-side-five.vercel.app'
})
const useAxiosPublic = () => {
    return  axiosPublic;
};

export default useAxiosPublic;