import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import {  Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Lottie from 'lottie-react';
import Loginjson from "./Login.json";
import GoogleLogin from './GoogleLogin';


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
      <div className='min-h-screen'>
         <Helmet>
                <title>WebPulse | Login</title>
            </Helmet>
            <div className=" ">
       {/* <div className="mx-4 mt-4">
      <Link href="/" className="text-rose-600 text-2xl mx-10"> <FontAwesomeIcon icon={faTentArrowTurnLeft} className="w-10 h-10"/> </Link>
      </div>  */}
      <div className="min-h-screen ">
      <h1 className="text-3xl mt-10 md:text-5xl font-bold text-center text-[#5f9fff] py-10 ">
        Login
      </h1>
     
      <div className="flex flex-col md:flex-row items-center justify-center gap-4  mb-20 ">
        <div className="w-11/12 md:w-2/5 lg:w-1/3">
          <Lottie animationData={Loginjson} loop={true} />
        </div>
        <div className="w-11/12 md:w-2/5 lg:w-2/3 max-w-md p-8 space-y-3 rounded-xl ">
          <form
            onSubmit={handleLogin} 
            action=""
            className="space-y-3"
          >
            <div className="space-y-1 text-sm">
              <label  className="block text-[#5f9fff] ">
                User Email
              </label>
              <input
                type="email"
                name="email"
               
                id="email"
                placeholder="User Email"
                className="w-full px-4 py-3 rounded-none bg-[#dee4f2]"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label  className="block text-[#5f9fff]">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
              
                placeholder="Password"
                className="w-full px-4 py-3 rounded-none bg-[#dee4f2]"
              />
              <div className="flex justify-end text-xs text-[#5f9fff]">
                
              </div>
            </div>
            <div  className="space-y-1 text-sm">
      <label className="label">
        {/* <span className="label-text">Captcha</span> */}
        <LoadCanvasTemplate className="border-2 border-blue-500" />
      </label>
      <input type="text" onBlur={handleValidateCaptcha}  name="captcha" placeholder="captcha" className="w-full px-4 py-3 rounded-none bg-[#dee4f2]"/>
 


    </div>
            <button className="block w-full p-3  text-center rounded bg-[#5f9fff] text-white">
              Log in
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16"></div>
            
            <div className="flex-1 h-px sm:w-16"></div>
          </div>
          <div className="flex justify-center space-x-4">
          
          </div>
          <p className="text-xs text-center sm:px-6 ">
            Don&apos;t have an account?
            <Link
            to="/register"
              rel="noopener noreferrer"
            
              className=" text-[#5f9fff] pl-2 font-semibold"
            >
              Register
            </Link>
          </p>

             {/* social Login */}
          {/* <div>

          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
		<p className="px-3 text-sm dark:text-gray-600 text-center ">Login with Google</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>

	<div className="flex justify-center space-x-4">
<GoogleLogin></GoogleLogin>
    </div>

          </div> */}


        </div>
        <div></div>

  
    </div>
    <div>

      
    </div>

      </div>
    </div>
    </div>


       
    
      
    );
};

export default Login;
