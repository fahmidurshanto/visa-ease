import React, { useEffect, useState } from "react";
import "animate.css";
import { Link } from "react-router-dom";

const LatestVisas = () => {
  const [visas, setVisas] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/all-visa")
    .then(res => res.json())
    .then(data => setVisas(data))
  }, [])


  return (
    <div className="py-12 dark:bg-gray-900 bg-gray-100 dark:text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 animate__animated animate__fadeInDown">
          Latest Visas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visas.slice(0, 10).map((visa, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={visa.countryImage}
                alt={visa.countryName}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{visa.countryName}</h3>
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">Visa Type:</span> {visa.visaType}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">Processing Time:</span> {visa.processingTime}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">Fee:</span> {visa.fee}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">Validity:</span> {visa.validity}
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Application Method:</span> {visa.applicationMethod}
                </p>
                <button className="cursor-pointer">
                <Link to={`/all-visas/${visa._id}`} className="py-3 px-8 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                  See Details
                </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestVisas;