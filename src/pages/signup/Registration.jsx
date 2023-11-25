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
                                        timer: 1500
                                    })
                                    navigate('/');
                                }
                            })
                        console.log('user profile info updated')

                    }).catch(error => console.log(error))


                // updateUser(data.name, data.imageFile)
                //     .then(() => {
                //         // create user entry in the database
                //         const userInfo = {
                //             name: data.name,
                //             email: data.email,
                //             role: data.role,
                //             image: res.data.data.display_url
                //         }
                //   console.log('userInfo', userInfo.data)
                // axiosPublic.post('/users', userInfo)
                //     .then(res => {
                //         if (res.data.insertedId) {
                //             console.log('user added to the database')
                //             reset();
                //             Swal.fire({
                //                 position: 'top-end',
                //                 icon: 'success',
                //                 title: 'User created successfully.',
                //                 showConfirmButton: false,
                //                 timer: 1500
                //             });
                //             navigate('/');
                //         }
                //     })


            })
            .catch(error => console.log(error))

    };

    return (
        <>
            <Helmet>
                <title>WebPulse | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen  bg-base-100 shadow-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center  w-full lg:w-1/2 lg:text-left">
                        <img className=' bg-base-100 w-96' src={regimg} alt="" />  </div>
                    <div className="w-full lg:w-1/2 p-6  bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
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
                                        <span className="label-text">Role*</span>
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
                                        <span className="label-text">Designation*</span>
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
                                    <span className="label-text">bank account no.</span>
                                </label>
                                <input type="text"  {...register("bank_account_no", { required: true })} name="bank_account_no" placeholder="bank_account_no" className="input input-bordered" />
                                {errors.bank_account_no && <span className="text-red-600">bank account no. is required</span>}
                            </div>
                            {/* salary */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">salary</span>
                                </label>
                                <input type="number"  {...register("salary", { required: true })} name="salary" placeholder="Salary" className="input input-bordered" />
                                {errors.salary && <span className="text-red-600">bank account no. is required</span>}
                            </div>
                            {/* image */}
                            <div className="form-control w-full my-6">
                                <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="px-6"><small>Already have an account <Link to="/login" className='text-blue-600'>Login</Link></small></p>

                    </div>
                </div>
            </div>
        </>
    );
};


export default Registration;