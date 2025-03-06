import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

const AllVisa = () => {

    const [visas, setVisas] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/all-visa")
        .then(res => res.json())
        .then(data => setVisas(data ))
    },[])

  return (
    <div className="container mx-auto p-6">
        <h2 className='text-3xl font-bold text-center mb-8 animate__animated animate__fadeInDown py-16'>All visa</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visas.map((visa, index) => (
          <div
            key={visa._id}
            className="animate__animated animate__fadeInUp bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 py-10"
            style={{ '--animate-delay': `${index * 0.1}s` }}
          >
            {console.log(visa)}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{visa.Country_name}</h3>
                <img src={visa.Country_image} className='w-full h-36 py-5' />
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">Type:</span> {visa.Visa_type}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">Processing Time:</span> {visa.Processing_time}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">Application method:</span> {visa.Application_method}
                </p>
               
              </div>
              <Link
                to={`/visas/${visa._id}`}
                className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVisa;