import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import {  Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Login = () => {

  const [disabled,setDisabled]= useState(true);
  const[user,setUser] =useState(null); 

    const {signIn} =useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
  //  const from = location.state?.from?.pathname || "/";

    
  useEffect(()=>{
    loadCaptchaEnginge(6); 
},[])

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
         timer: 1000
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
       text: 'Wrong Email or Password !',
      
     })
    }
    ) 
   
    }
    const handleValidateCaptcha = (e) => {
      const user_captcha_value = e.target.value;
      if (validateCaptcha(user_captcha_value)) {
          setDisabled(false);
      }
      else {
          setDisabled(true)
      }
  }
    return (
        <div className="hero  w-full min-h-screen ">
            <Helmet>
                <title>WebPulse | Login</title>
            </Helmet>
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
    <div  className="form-control ">
      <label className="label">
        {/* <span className="label-text">Captcha</span> */}
        <LoadCanvasTemplate />
      </label>
      <input type="text" onBlur={handleValidateCaptcha}  name="captcha" placeholder="captcha" className="input input-bordered" />
 

   {/* <button onBlur={handleValidateCaptcha}  className='btn btn-outline btn-xs m-2 py-2'  required>Validate</button> */}
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
