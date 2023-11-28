import { useContext,  } from 'react';

import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import {  Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {



    const {signIn} =useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
  //  const from = location.state?.from?.pathname || "/";

    

    const handleLogin=event=>{
        event.preventDefault();
        const form =event.target;
      const email=form.email.value;
      const password=form.password.value;
    
    console.log(email,password);
    
    signIn(email,password)
     
    
    .then(result=>{
        console.log(result.user)
        Swal.fire({
         icon: 'success',
         title: 'Login Succesful',
         showConfirmButton: false,
         timer: 1500
       })
          
       // navigate after login
    //    navigate(from, { replace: true });
       navigate(location?.state ? location.state : '/');
    })
    .catch(error=>{
      console.error(error)
      Swal.fire({
       icon: 'error',
       title: 'Oops...',
       text: 'Something went wrong!',
      
     })
    }
    )
       
   
    }
  
   
 
    return (
        <div className="hero  w-full min-h-screen ">
  <div className="hero-content w-full md:w-5/6 lg:w-1/2  bg-[#b057a3] flex-col ">
    <div className="text-center w-1/2">
      <h1 className="text-5xl font-bold text-white">Login now!</h1>
      
    </div>
    <div className="  p-6 w-full  ">
      <form onSubmit={handleLogin} className="w-full">
      <div  className="form-control ">
      <label className="label">
        <span className="label-text text-white">Email</span>
      </label>
      <input type="email" name='email' placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-white">Password</span>
      </label>
      <input type="password" name='password' placeholder="password" className="input input-bordered text-black" required />
     
    </div>
 
        <div className="form-control mt-6">
         
          <input className="btn bg-black text-white"  disabled={false} type="submit" value="Login"/>
        </div>

      </form>
      <p className="py-3 text-white"><small>Don't have an account? <br /> <Link to="/register" className='btn bg-black w-full text-white '>Sign Up </Link></small></p>
     
    </div>
  </div>
</div>
    );
};

export default Login;
