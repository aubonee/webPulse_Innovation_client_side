import { useContext } from 'react';
import useAxiosPublic from '../../hooks/UseAxiosPublic';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import regimg from '../../assets/reg.jpg'
import Lottie from 'lottie-react';
import SignUpLottie from '../../assets/signUp.json'


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEYS;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Registration = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = async (data) => {

        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        });
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, res.data.data.display_url)
                    .then(() => {
                        setUser((prev) => {
                            console.log('photo Url:',res.data.data.display_url);
                            const updatedUserProfile = { ...prev, displayName: data.name, photoURL: res.data.data.display_url }
                            return updatedUserProfile;
                        })

                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            role: data.role,
                            image: res.data.data.display_url,
                            bank_account_no:data.bank_account_no,
                            salary:data.salary,
                            designation:data.designation
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                   console.log('user added to the database')
                                    reset();
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Registration  Succesful',
                                        showConfirmButton: false,
                                        timer: 1000
                                    })
                                    navigate('/');
                                }
                            })
                        console.log('user profile info updated')

                    }).catch(error => console.log(error))



            })
            .catch(error => console.log(error))

    };

    return (
        <>
            <Helmet>
                <title>WebPulse | Sign Up</title>
            </Helmet>
            <div className='mt-20'>
         <h1 className="text-4xl font-bold text-[#5f9fff] text-center ">SignUp now!</h1> 
         </div>
            <div className=" mx-auto p-0 mb-5 hero min-h-screen text-black w-11/12 lg:w-5/6 ">
       
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="  w-full lg:w-1/2 m-0">
                   
                    <Lottie animationData={SignUpLottie} loop={true} />
                     </div>
                    <div className="w-full md:w-5/6 lg:w-1/2  m-0 ">
                        <form onSubmit={handleSubmit(onSubmit)} >
                       
                           <div className='flex flex-col lg:flex-row gap-5 w-full'>
                           <div className="form-control w-full lg:w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#5f9fff] text-md uppercase">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered w-full bg-[#dee4f2]" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>

                            <div className="form-control w-full  lg:w-1/2">
                                <label className="label">
                                    <span className="label-text text-[#5f9fff] text-md uppercase">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered w-full bg-[#dee4f2]" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                           </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#5f9fff] text-md uppercase">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                })} placeholder="password" className="input input-bordered bg-[#dee4f2]" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}

                            </div>



                            <div className="flex gap-2">
                                {/* role */}
                                <div className="form-control w-full my-2">
                                    <label className="label">
                                        <span className="label-text text-[#5f9fff] uppercase">Role</span>
                                    </label>
                                    <select defaultValue="default" {...register('role', { required: true })}
                                        className="select select-bordered w-full bg-[#dee4f2]">
                                        <option disabled value="default">Select a Role</option>
                                        <option value="hr">HR</option>
                                        <option value="employee">Employee</option>

                                    </select>
                                </div>
                                {/* designation */}
                                <div className="form-control w-1/2 my-2">
                                    <label className="label">
                                        <span className="label-text text-[#5f9fff] text-md uppercase">Designation</span>
                                    </label>
                                    <select defaultValue="default" {...register('designation', { required: true })}
                                        className="select select-bordered w-full bg-[#dee4f2]">
                                        <option disabled value="default">Select a Designation</option>
                                        <option value="manager">Manager</option>
                                        <option value="teamleader">Team Leader</option>
                                        <option value="supervisor">Supervisor</option>
                                        <option value="intern">Intern</option>

                                    </select>
                                </div>
                              

                            </div>


                            {/* bank account and salary  */}
                            <div className="flex gap-2 ">
                                {/* bank account */}
                                <div className="form-control w-1/2 ">
                                <label className="label">
                                    <span className="label-text text-[#5f9fff] text-md uppercase">bank account no.</span>
                                </label>
                                <input type="text"  {...register("bank_account_no", { required: true })} name="bank_account_no" placeholder="bank_account_no" className="input input-bordered bg-[#dee4f2]" />
                                {errors.bank_account_no && <span className="text-red-600">bank account no. is required</span>}
                            </div>
                              {/* salary */}
                              <div className="form-control w-1/2 ">
                                <label className="label ">
                                    <span className="lebel-text text-[#5f9fff] text-md uppercase">salary</span>
                                </label>
                                <input type="number"  {...register("salary", { required: true })} name="salary" placeholder="Salary" className="input input-bordered bg-[#dee4f2]" />
                                {errors.salary && <span className="text-red-600">bank account no. is required</span>}
                            </div>
                            </div>
                          
                           
                            {/* image */}
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-[#5f9fff] text-md uppercase">Photo</span>
                                </label>
                                <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs bg-[#dee4f2]" />
                            </div>

                            
                            <div className="form-control mt-6">
                                <input className="btn bg-[#5f9fff] w-full text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="text-xs text-center sm:px-6 mt-5">
           Already have an account?
            <Link
            to="/login"
              rel="noopener noreferrer"
            
              className="underline text-[#5f9fff]"
            >
              Login
            </Link>
          </p>
                        

                    </div>
                </div>
            </div>
        </>
    );
};


export default Registration;