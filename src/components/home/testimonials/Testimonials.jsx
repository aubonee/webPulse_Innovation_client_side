
import { useQuery } from '@tanstack/react-query';

import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'



// Import Swiper styles
import 'swiper/css';

// import required modules

import useAxiosPublic from '../../../hooks/UseAxiosPublic';
import SectionTitle from '../../shared/sectinTitle/SectionTitle';

const Testimonials = () => {

    const axiosPublic =useAxiosPublic();
    
   
      
    const { data:reviews=[] , }=useQuery({
      //refetch
      queryKey:['reviews'],
      queryFn:async ()=>{
          const res =await axiosPublic.get('/reviews');
          return res.data

      }
  })
    return (
        <div className=' mx-auto w-1/2'>
                 <SectionTitle
            subHeading="What Our Client Say"
            heading={'Testimonials'}
        ></SectionTitle>
                 <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

{
    reviews.map(review => <SwiperSlide
        key={review._id}
    >
         
        <div className="flex flex-col items-center mx-24 my-16">
        <div> <img src={review.image_link} alt="" /></div> 
            <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
            />
          
            <p className=" text-2xl font-bold py-8 w-[500px] text-purple-400 text-center">{review.user_name}</p>
            <h3 className="text-xl  text-center">{review.comment}</h3>
        </div>
    </SwiperSlide>)
}
</Swiper>
        </div>
    );
};

export default Testimonials;