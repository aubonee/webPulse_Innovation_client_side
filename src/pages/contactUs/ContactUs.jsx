import React from 'react';
import { IoLocation } from "react-icons/io5";

const ContactUs = () => {
    return (
        <div className='mx-auto flex justify-center items-center min-h-screen max-w-screen-xl'>
            Contact us
            <div className=" mx-auto flex w-1/2 h-[400px]">
                <div className=' p-4 text-3xl w-1/2 flex bg-[#584b76] h-full uppercase font-extrabold text-white'>  <span> <IoLocation /></span>address</div>
                <div className='w-1/2 px-6 py-4 bg-[#f2e2ff] h-full'>
                    <form >
                    
                    <div className='form-control'>
                    <label className="label"><span className="label-text">Email</span> </label>
                    <input type="text" placeholder="Type here" className="input input-bordered rounded-none w-full max-w-xs" />
                    </div>
                    <div>
                    <label className="label"> <span className="label-text">Message</span>  </label>
                    <textarea className="textarea w-full textarea-bordered rounded-none" placeholder="Bio"></textarea>
                    </div>
                    <div><button type="submit">Send</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;