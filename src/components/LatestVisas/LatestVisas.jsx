import React, { useEffect, useState } from "react";
import "animate.css";
import { Link } from "react-router-dom";

const LatestVisas = () => {
  const [visas, setVisas] = useState([]);
  // // Sample visa data
  // const visas = [
  //   {
  //     country: "United States",
  //     image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2099&q=80",
  //     visaType: "Tourist Visa",
  //     processingTime: "10-15 Business Days",
  //     fee: "$160",
  //     validity: "6 Months",
  //     applicationMethod: "Online",
  //   },
  //   {
  //     country: "Canada",
  //     image: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
  //     visaType: "Student Visa",
  //     processingTime: "20-25 Business Days",
  //     fee: "$150",
  //     validity: "1 Year",
  //     applicationMethod: "Online",
  //   },
  //   {
  //     country: "Australia",
  //     image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  //     visaType: "Work Visa",
  //     processingTime: "15-20 Business Days",
  //     fee: "$300",
  //     validity: "2 Years",
  //     applicationMethod: "Online",
  //   },
  //   {
  //     country: "United Kingdom",
  //     image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
  //     visaType: "Business Visa",
  //     processingTime: "5-10 Business Days",
  //     fee: "$200",
  //     validity: "1 Year",
  //     applicationMethod: "Online",
  //   },
  //   {
  //     country: "France",
  //     image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
  //     visaType: "Tourist Visa",
  //     processingTime: "7-12 Business Days",
  //     fee: "$120",
  //     validity: "3 Months",
  //     applicationMethod: "Online",
  //   },
  //   {
  //     country: "Japan",
  //     image: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  //     visaType: "Tourist Visa",
  //     processingTime: "5-7 Business Days",
  //     fee: "$90",
  //     validity: "3 Months",
  //     applicationMethod: "Online",
  //   },
  // ];
  useEffect(() => {
    fetch("http://localhost:5000/all-visa")
    .then(res => res.json())
    .then(data => setVisas(data))
  }, [])

console.log(visas)

  return (
    <div className="bg-gray-100 py-12">
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