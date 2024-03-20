
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img3 from '../../../assets/banner/banner1.jpg'
import img2 from '../../../assets/banner/banner3.jpg'
import Lottie from "lottie-react";
import BannerAni from "../../../assets/Animation - Banner.json"





const Banner = () => {
    return (
       <div className="w-full pt-10 min-h-[70vh] bg-[#fcfcfc] dark:bg-gray-800 font-serif dark:text-gray-100">
         <Carousel  className="text-center autoPlay" >
        
        <div className="bg-[#fcfcfc] dark:bg-gray-800 dark:text-gray-100">
        
	<div className="container flex flex-col justify-center mx-auto  lg:flex-row lg:justify-around">
		<div className="flex w-full lg:w-2/5 p-5 items-center justify-center ">
			
        <Lottie animationData={BannerAni} loop={true} />
        </div>
		<div className="w-full lg:w-2/5 flex flex-col justify-center text-center lg:text-left">
			<h1 className="text-4xl font-bold  ">Empower Your  <br/>Team with
				<span className="dark:text-Blue-500 text-[#5f9fff]"> WebPulse Innovation</span>
			</h1>
			<p className="mt-6 mb-8 text-xl sm:mb-12">Streamline Workforce Management, Boost Productivity
				<br  className="" />and Drive Success
			</p>
			
		</div>
	</div>

           
        </div>
       
      
        <div className=" bg-[#fcfcfc] dark:bg-gray-800 dark:text-gray-100">
        
	<div className="container flex flex-col justify-center mx-auto  lg:flex-row lg:justify-around">
		<div className="flex w-full lg:w-2/5 items-center justify-center ">
			
        <img src={img2} alt=""  />
        </div>
		<div className="w-full lg:w-2/5 flex flex-col justify-center text-center lg:text-left">
			<h1 className="text-4xl font-bold   ">Unlock Your Team's <br/> Potential with 
				<span className="dark:text-Blue-500 text-[#5f9fff]"> WebPulse Innovation</span>
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Elevating Performance, Engagement, and Collaboration 
				<br  className="" />in the Workplace
			</p>
			
		</div>
	</div>

           
        </div>
           
        
        
        <div className=" bg-[#fcfcfc] dark:bg-gray-800 dark:text-gray-100">
        
	<div className="container flex flex-col justify-center mx-auto  lg:flex-row lg:justify-around">
		<div className="flex w-full lg:w-2/5 items-center justify-center ">
			
        <img src={img3} alt=""  />
        </div>
		<div className="w-full lg:w-2/5 flex flex-col justify-center text-center lg:text-left">
			<h1 className="text-4xl font-bold  "> <span className="dark:text-Blue-500 text-[#5f9fff]">WebPulse Innovation: </span> <br /> Redefining Workforce Dynamics
				
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Innovative HR Solutions for Today's Dynamic 
			Work Environments
			</p>
			
		</div>
	</div>

           
        </div>
           
        
       
        

    </Carousel>
       </div>
    );
};

export default Banner;