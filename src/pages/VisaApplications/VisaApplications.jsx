import React, { useEffect, useState } from "react";
import "animate.css"; // Import Animate.css for animations

const VisaApplications = () => {

    const [visaApplications, setVisaApplications] = useState([]);
    useEffect(() =>{
        fetch("http://localhost:5000/applied-visa")
        .then(res => res.json())
        .then(data => setVisaApplications(data))
    },[])

    
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center animate__animated animate__fadeIn">
        My Visa Applications
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visaApplications.map((visa) => {
            const {formData, visaDetails} = visa;
            console.log(formData.email)
            return (
                <div
                  key={visa._id}
                  className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 animate__animated animate__fadeInUp"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={ visaDetails.countryImage}
                      alt={visaDetails.countryName}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <h2 className="text-xl font-semibold">{visaDetails.country}</h2>
                  </div>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Visa Type:</span> { visaDetails.visaType}
                    </p>
                    <p>
                      <span className="font-medium">Processing Time:</span>{" "}
                      {visaDetails?.processingTime}
                    </p>
                    <p>
                      <span className="font-medium">Fee:</span> ${visaDetails?.fee}
                    </p>
                    <p>
                      <span className="font-medium">Validity:</span> {visaDetails?.validity}
                    </p>
                    <p>
                      <span className="font-medium">Application Method:</span>{" "}
                      {visaDetails?.applicationMethod}
                    </p>
                    <p>
                      <span className="font-medium">Applied Date:</span>{" "}
                      {formData?.appliedDate}
                    </p>
                    <p>
                      <span className="font-medium">Applicant's Name:</span>{" "}
                      {`${formData?.firstName} ${formData?.lastName}`}
                    </p>
                    <p>
                      <span className="font-medium">Applicant's Email:</span>{" "}
                      {formData?.email}
                    </p>
                  </div>
                  <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 animate__animated animate__pulse animate__infinite">
                    Cancel
                  </button>
                </div>
              )
        })}
      </div>
    </div>
  );
};

export default VisaApplications;