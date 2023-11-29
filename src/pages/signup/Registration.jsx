import { useContext } from 'react';
import useAxiosPublic from '../../hooks/UseAxiosPublic';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import regimg from '../../assets/reg.jpg'


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
            <div className="mt-32 mx-auto p-0 mb-5 hero min-h-screen text-black w-11/12 lg:w-5/6 ">
           
                <div className="hero-content flex-col bg-[#b057a3] lg:flex-row-reverse">
                    <div className="  w-full lg:w-1/2 m-0"> 
                           <img className=' shadow-lg ' src={regimg} alt="" /> 
                     </div>
                    <div className="w-full md:w-5/6 lg:w-1/2 p-6 m-0 ">
                        <form onSubmit={handleSubmit(onSubmit)} >
                        <h1 className="text-5xl font-bold text-white text-center mb-5">SignUp now!</h1>
                           <div className='flex flex-col lg:flex-row gap-5 w-full'>
                           <div className="form-control w-full lg:w-1/2">
                                <label className="label">
                                    <span className="label-text text-white text-md uppercase">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered w-full" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>

                            <div className="form-control w-full  lg:w-1/2">
                                <label className="label">
                                    <span className="label-text text-white text-md uppercase">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered w-full" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                           </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-md uppercase">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}

                            </div>



                            <div className="flex gap-2">
                                {/* role */}
                                <div className="form-control w-full my-6">
                                    <label className="label">
                                        <span className="label-text text-white uppercase">Role</span>
                                    </label>
                                    <select defaultValue="default" {...register('role', { required: true })}
                                        className="select select-bordered w-full">
                                        <option disabled value="default">Select a Role</option>
                                        <option value="hr">HR</option>
                                        <option value="employee">Employee</option>

                                    </select>
                                </div>
                                {/* designation */}
                                <div className="form-control w-1/2 my-6">
                                    <label className="label">
                                        <span className="label-text text-white text-md uppercase">Designation</span>
                                    </label>
                                    <select defaultValue="default" {...register('designation', { required: true })}
                                        className="select select-bordered w-full">
                                        <option disabled value="default">Select a Designation</option>
                                        <option value="manager">Manager</option>
                                        <option value="teamleader">Team Leader</option>
                                        <option value="supervisor">Supervisor</option>
                                        <option value="intern">Intern</option>

                                    </select>
                                </div>
                                {/* bank account no. */}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-md uppercase">bank account no.</span>
                                </label>
                                <input type="text"  {...register("bank_account_no", { required: true })} name="bank_account_no" placeholder="bank_account_no" className="input input-bordered" />
                                {errors.bank_account_no && <span className="text-red-600">bank account no. is required</span>}
                            </div>
                            {/* salary */}
                            <div className="form-control">
                                <label className="label ">
                                    <span className="lebel-text text-white text-md uppercase">salary</span>
                                </label>
                                <input type="number"  {...register("salary", { required: true })} name="salary" placeholder="Salary" className="input input-bordered" />
                                {errors.salary && <span className="text-red-600">bank account no. is required</span>}
                            </div>
                            {/* image */}
                            <div className="form-control w-full my-6">
                                <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-black w-full text-white " type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="py-3 text-white"><small>Already have an account? <br /> <Link to="/login" className='btn bg-black w-full text-white '>Login</Link></small></p>

                    </div>
                </div>
            </div>
        </>
    );
};


export default Registration;