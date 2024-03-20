import React from 'react';
import useAxiosPublic from '../../../hooks/UseAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import ServiceCard from './ServiceCard';
import SectionTitle from '../../shared/sectinTitle/SectionTitle';

const Services = () => {
    const axiosPublic =useAxiosPublic();
    
   
      
    const { data:services=[] , }=useQuery({
      //refetch
      queryKey:['services'],
      queryFn:async ()=>{
          const res =await axiosPublic.get('/services');
          return res.data

      }
  })
    return (
        <div className='my-6 mx-auto flex-col items-center max-w-screen-xl'>
            <SectionTitle heading="Our Features" subHeading="Explore Our Diverse Range of Services"></SectionTitle>
                   <div className='mx-auto  pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
{
            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard> ) }
       </div>
        </div>

   
    );
};

export default Services;