import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useAxiosSecure from '../../../../hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const CheckOutForm = () => {
    const [error,setError] =useState('');
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [selectedYear, setSelectedYear] = useState(null);
    const handleMonthChange = (month) => {
        setSelectedMonth(month);
      };
      const handleYearChange = (year) => {
        setSelectedYear(year);
      };
    
   const stripe =useStripe();
    const elements =useElements();
    const axiosSecure=useAxiosSecure();
    const { data:users=[] , }=useQuery({
        //refetch
        queryKey:['users'],
        queryFn:async ()=>{
            const res =await axiosSecure.get('/users');
            return res.data
  
        }
    })
   // const salary =users.salary
    useEffect(()=>{
      axiosSecure.post('/create-payment-intent')
    },[])

   const handleSubmit =async (event) =>{
     event.preventDefault();
     if(!stripe || !elements){
        return ;
     }
     const card =elements.getElement(CardElement)
     if(card === null){
        return;
     }

     const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
     })
     if(error){
        console.log('payment eror', error)
        setError(error.message);
     }
     else{
        console.log('payment method ', paymentMethod)
       setError(' ');
    }
   
    } 

    
    return (
        <form onSubmit={handleSubmit} className=' py-2 pl-1 pr-2'>
                 <div className="flex gap-5 mb-3">
     <div className="">
     <label className="label">
    <span className="label-text font-bold">Choose the Month:</span>
  </label>
      <DatePicker className='input input-bordered w-full max-w-xs'
        selected={selectedMonth}
        onChange={handleMonthChange}
        showMonthYearPicker
        dateFormat="MM"
 /> </div>
      <div className='form-control'>
     <label className="label">
    <span className="label-text  font-bold">Choose the Year:</span>
  </label>
      <DatePicker className='input input-bordered w-full max-w-xs'
        selected={selectedYear}
        onChange={handleYearChange}
        showYearPicker
        dateFormat="yyyy" />
     </div>

     </div>
        <CardElement className='input input-bordered'
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className=' my-2 mx-auto btn byn-primary' type="submit " disabled={!stripe}>
          Pay
        </button>
        <p className='text-red-500' >{error} </p>
      </form>
    );
};

export default CheckOutForm;