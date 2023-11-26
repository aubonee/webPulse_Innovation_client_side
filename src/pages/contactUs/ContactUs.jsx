import React from 'react';

const ContactUs = () => {
    return (
        <div className='mx-auto flex justify-center items-center min-h-screen max-w-screen-xl'>
            Contact us
            <div className=" mx-auto flex w-1/2 h-[400px]">
                <div className='w-1/2 bg-[#584b76] h-full'>address</div>
                <div className='w-1/2 px-6 py-4 bg-[#f2e2ff] h-full'>
                    <form >
                    
                    <div className='form-control'>
                    <label className="label"><span className="label-text">Email</span> </label>
                    <input type="text" placeholder="Type here" className="input input-bordered rounded-none w-full max-w-xs" />
                    </div>
                    <div>
                    <label className="label"> <span className="label-text">Email</span>  </label>
                    <textarea className="textarea textarea-bordered rounded-none" placeholder="Bio"></textarea>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;