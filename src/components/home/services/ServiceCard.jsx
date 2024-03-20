import React from 'react';

const ServiceCard = ({service}) => {
    const { title,description,image,  _id } = service;

    return (
        <div className=" mx-auto card w-96 bg-base-100 shadow-xl">
        <figure><img className='h-[240px]' src={image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className=" text-[5f9fff] card-title">{title}</h2>
            <p>{description}</p>
            
          
        </div>
    </div>
    );
};

export default ServiceCard;