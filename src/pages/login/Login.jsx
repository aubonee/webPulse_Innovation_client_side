import { useContext,  } from 'react';

import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import {  useLocation, useNavigate } from 'react-router-dom';


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
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card  w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
      <div  className="form-control ">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name='email' placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name='password' placeholder="password" className="input input-bordered text-black" required />
     
    </div>
 
        <div className="form-control mt-6">
         
          <input className="btn btn-primary"  disabled={false} type="submit" value="Login"/>
        </div>
      </form>
     
    </div>
  </div>
</div>
    );
};

export default Login;
