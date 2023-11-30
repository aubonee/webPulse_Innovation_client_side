import React from 'react';
import { IoLocation } from "react-icons/io5";
import { FaPhoneSquare } from "react-icons/fa";
import SectionTitle from '../../components/shared/sectinTitle/SectionTitle';

const ContactUs = () => {
    return (
        <div className='mx-auto py-16 min-h-[100vh] max-h-full max-w-screen-xl'>
            <div className='w-full'>
                <SectionTitle heading="Get in Touch" subHeading=" Reach Out for Collaborations, Inquiries, or Just to Say Hello!"></SectionTitle>
            </div>
            <div className='mx-auto flex justify-center items-center '>
           
            <div className=" mx-auto flex flex-col lg:flex-row  w-3/4 min-h-[400px]">
                <div className=' w-11/12 md:w-5/6 lg:w-1/2 pt-12 pb-10 flex flex-col bg-[#b057a3] h-full'> 
                <div className='flex h-[70px] ml-4 mt-5 '>
                    <div className=' flex justify-center items-center mt-1 text-5xl text-white border-2 border-white p-2 mr-3'>  <IoLocation /></div>
                    <div >
                    <h2 className=' text-2xl  uppercase  text-white'>address</h2>
                     <p className='  text-md  text-white'>H#487B, R#8C, Baridhara DOHS, Dhaka 1206, Bangladesh</p>
                    </div> 
                </div>
                <div className='flex h-[70px] ml-4 mt-5 '>
                    <div className=' flex justify-center items-center mt-1 text-5xl text-white border-2 border-white p-2 mr-3'> <FaPhoneSquare /></div>
                    <div >
                    <h2 className=' text-2xl  uppercase  text-white'>phone </h2>
                     <p className='  text-md  text-white'>+8801338167444</p>
                    </div> 
                </div>
                   
                </div>
            
                <div className='w-11/12 md:w-5/6 lg:w-1/2  px-6 pt-12 pb-10 bg-[#d07bc3] h-full'>
                    <form >
                    
                    <div className='form-control'>
                    <label className="label"><span className="label-text">Email</span> </label>
                    <input type="text" placeholder="Type here" className="input input-bordered rounded-none w-full " />
                    </div>
                    <div>
                    <label className="label"> <span className="label-text">Message</span>  </label>
                    <textarea className="textarea w-full textarea-bordered rounded-none" placeholder="Bio"></textarea>
                    </div>
                    <div><button className='w-full mt-6 btn bg-black text-white text-xl ' type="submit">Send</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ContactUs;