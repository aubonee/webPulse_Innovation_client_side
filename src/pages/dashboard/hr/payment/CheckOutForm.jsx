import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useAxiosSecure from '../../../../hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const CheckOutForm = ({employee}) => {
  //console.log('Employee:', employee);
  const salary = employee.salary;
  // const name = employee.name;
 // console.log(salary);
    const [error,setError] =useState('');
    const [clientSecret, setClientSecret] =useState('');    const [selectedMonth, setSelectedMonth] = useState(null);
    const [transsactionId, setTranssactionId]=useState('')
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
  
    useEffect( ()=>{
     axiosSecure.post('/create-payment-intent',{salary:salary})
     .then(res => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
  })
    },[axiosSecure,salary])

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

    
  ///////////Duplicate payment entry checking
  const existingPayment = await axiosSecure.get('/payments', {
    params: {
      email: employee.email,
      month: selectedMonth ? (selectedMonth.getMonth() + 1).toString().padStart(2, '0') : '',
      year: selectedYear ? selectedYear.getFullYear().toString() : '',
    },
    
  });
  console.log(existingPayment.data);

  if (existingPayment.data.length > 0) {
    console.log('Payment already made for the selected month and year');
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Payment already made for the selected month and year",
      showConfirmButton: false,
      timer: 1500
    });
    return;
  }


    ///confirm payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: employee?.name,
          email:employee?.email,
          
        },
      },
    })
    if (confirmError) {
      console.log('confirm error',confirmError)
      
  }
    else{
      console.log('payment intent', paymentIntent)
      if(paymentIntent.status === 'succeeded')
      console.log('transsaction id', paymentIntent.id);
    setTranssactionId(paymentIntent.id)
    }
   /////////////now save the payment in the database
   const payment ={
    name: employee.name,
    email:employee.email,
    salary:employee.salary,
    month:selectedMonth?(selectedMonth.getMonth() + 1).toString().padStart(2, '0') : '',
    year:selectedYear?selectedYear.getFullYear().toString() : '',
    transactionId:paymentIntent.id,
    
   }
    const res= await axiosSecure.post('/payments', payment)
    console.log(res.data)
    if(res.data){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Paid the salary successfully",
        showConfirmButton: false,
        timer: 1500
      });
    }
    console.log('payment saved',res);
  } 

    
    return (
        <div  className=' py-2 pl-1 pr-2'>
             <h3 className="font-bold text-lg">Salary:{salary}</h3>  <br />
                 <div className="flex gap-5 mb-3">
              
     <div className="">
     <label className="label">
    <span className="label-text font-bold">Choose the Month:</span>
  </label>
      <DatePicker className='input input-bordered w-full max-w-xs ' required
        selected={selectedMonth}
        onChange={handleMonthChange}
        showMonthYearPicker
        dateFormat="MM"
 /> </div>
      <div className='form-control'>
     <label className="label">
    <span className="label-text  font-bold">Choose the Year:</span>
  </label>
      <DatePicker className='input input-bordered w-full max-w-xs' required        selected={selectedYear}
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
        <button className=' my-2 mx-auto btn btn-primary' onClick={handleSubmit} disabled={!stripe || !clientSecret}>
          Pay
        </button>
        <p className='text-red-500' >{error} </p>
        {transsactionId && <p className='text-green'> Your TranssectionId :{transsactionId} </p>}
      </div>
    );
};

export default CheckOutForm;