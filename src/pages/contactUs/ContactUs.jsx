import React from 'react';
import { IoLocation } from "react-icons/io5";
import { FaPhoneSquare } from "react-icons/fa";
import SectionTitle from '../../components/shared/sectinTitle/SectionTitle';
import contact from '../../assets/contact.jpg'

const ContactUs = () => {
    return (
        <div className='mx-auto py-16 min-h-[100vh] max-h-full max-w-full lg:max-w-screen-xl'>
            <div className='w-[full]'>
                <SectionTitle heading="Get in Touch" subHeading=" Reach Out for Collaborations, Inquiries, or Just to Say Hello!"></SectionTitle>
            </div>
            <div className='mx-auto   flex justify-center items-center '>
           
            <div className=" mx-auto flex flex-col lg:flex-row  w-5/6 min-h-[450px]">
                <div className=' w-11/12 md:w-5/6 lg:w-1/2 pt-12 pb-10 flex flex-col bg-base-100  h-full'> 
                <div className='flex justify-center items-center'>
                    <img src={contact} alt="" className='w-[320px] ' />
                  </div>
                <div className='flex  ml-4 mt-5 '>

                    <div className=' flex justify-center items-center mt-1 text-4xl text-[#5F9FFF] border-2 border-[#5F9FFF] p-2 mr-3'>  <IoLocation /></div>
                    <div >
                    <h2 className=' text-xl  uppercase  text-[#5F9FFF]'>address</h2>
                     <p className='  text-md  text-[#5F9FFF]'>H#487B, R#8C, Baridhara DOHS, Dhaka 1206, Bangladesh</p>
                    </div> 
                </div>
                <div className='flex  ml-4 mt-5 '>
                    <div className=' flex justify-center items-center mt-1 text-4xl text-[#5F9FFF] border-2 border-[#5F9FFF] p-2 mr-3'> <FaPhoneSquare /></div>
                 
                    <div >
                    <h2 className=' text-xl  uppercase  text-[#5F9FFF]'>phone </h2>
                     <p className='  text-md  text-[#5F9FFF]'>+8801338167444</p>
                    </div> 
                </div>
                   
                </div>
            
                <div className='w-full  lg:w-1/2  px-5 py-auto pt-12 pb-10 min-h-[450px] bg-[#5F9FFF] h-full'>
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