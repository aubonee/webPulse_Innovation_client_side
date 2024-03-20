import React from 'react';
import SectionTitle from '../../shared/sectinTitle/SectionTitle';


const WhyChooseUs = () => {
   
    return (
        <div className=' flex flex-col justify-center items-center my-6' >
          <div className='w-full'>
          <SectionTitle heading="Why Choose Us" subHeading=" Unveiling the Reasons to Partner With Us for Your Digital Success."></SectionTitle>
          </div>
          <div className=' w-11/12'>
          <div  className='  grid grid-cols-1 lg:grid-cols-3 gap-3'>
                
          <div className='flex  flex-col border-2 border-[#5f9fff] rounded-xl px-10 py-5'>
                    <div className='flex justify-center items-center  mr-6'>
                        <h1 className='flex justify-center items-center  text-xl font-bold text-white box-border mx-auto w-[50px] h-[50px] bg-[#5f9fff] rounded-full'>01</h1>
                        </div>
                    <div className='flex flex-col justify-center  text-center'>
                        <div className="heading  my-3 text-2xl font-bold text-[#5f9fff]"><h1>Expertise in Every Pixel</h1></div>
                        <div className="desc text-justify"> <p>Benefit from our seasoned team of professionals who bring a wealth of experience and expertise to every project, ensuring meticulous attention to detail and top-notch craftsmanship in every aspect of web development.</p></div>
                    
                    </div>
                </div>
               
               
                <div className='flex  flex-col border-2 border-[#5f9fff] rounded-xl px-10 py-5'>
                    <div className='flex justify-center items-center  mr-6'>
                        <h1 className='flex justify-center items-center  text-xl font-bold text-white box-border mx-auto w-[50px] h-[50px] bg-[#5f9fff] rounded-full'>02</h1>
                        </div>
                    <div className='flex flex-col justify-center  text-center'>
                        <div className="heading  my-3 text-2xl font-bold text-[#5f9fff]"><h1>Innovation That Speaks Volumes</h1></div>
                        <div className="desc text-justify"> <p>Stay ahead of the curve with our innovative approach to web development. From cutting-edge design trends to the latest technologies, we infuse creativity and forward-thinking solutions to keep your digital presence fresh, engaging, and future-proof.</p></div>
                    
                    </div>
                </div>
                <div className='flex  flex-col border-2 border-[#5f9fff] rounded-xl px-10 py-5'>
                    <div className='flex justify-center items-center  mr-6'>
                        <h1 className='flex justify-center items-center  text-xl font-bold text-white box-border mx-auto w-[50px] h-[50px] bg-[#5f9fff] rounded-full'>03</h1>
                        </div>
                    <div className='flex flex-col justify-center  text-center'>
                        <div className="heading  my-3 text-2xl font-bold text-[#5f9fff]"><h1>Comprehensive Digital Ecosystem</h1></div>
                        <div className="desc text-justify"> <p>From website and mobile app development to hosting, SEO, and beyond, we offer a comprehensive suite of services. This one-stop-shop approach simplifies your digital journey, providing continuity, consistency, and a unified strategy for maximum impact and success.</p></div>
                    
                    </div>
                
              
                 
                </div>
              
          
               
            </div>
          </div>
        </div>
    );
};

export default WhyChooseUs;