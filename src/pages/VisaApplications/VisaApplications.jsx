import React, { useEffect, useState } from "react";
import "animate.css"; // Import Animate.css for animations
import { toast } from "react-toastify";
const VisaApplications = () => {
  const [visaApplications, setVisaApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  useEffect(() => {
    fetch("http://localhost:5000/applied-visa")
      .then((res) => res.json())
      .then((data) => setVisaApplications(data));
  }, []);

  // Function to handle search
  const handleSearch = () => {
    const filteredApplications = visaApplications.filter((visa) =>
      visa.visaDetails.countryName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setVisaApplications(filteredApplications);
  };

  // Function to reset search and show all applications
  const handleReset = () => {
    fetch("http://localhost:5000/applied-visa")
      .then((res) => res.json())
      .then((data) => setVisaApplications(data));
    setSearchTerm(""); // Clear the search term
  };

  const handleDelete = (id) =>{
    const confirmDelete = window.confirm("Are you sure you want to delete this visa application?");
    if(confirmDelete){
    fetch(`http://localhost:5000/applied-visa/${id}`, {
        method: "DELETE",
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.acknowledged){
            toast.success("Visa application deleted successfully");
            setVisaApplications((prev) => prev.filter((visa) => visa._id !== id));
        }
    })
    .catch((error) => {
        console.log(error);
    });
}
  }


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center animate__animated animate__fadeIn">
        My Visa Applications
      </h1>

      {/* Search Input and Button */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by country name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-l-lg p-2 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Search
        </button>
        <button
          onClick={handleReset}
          className="bg-gray-500 text-white px-4 py-2 ml-2 rounded-lg hover:bg-gray-600 transition-colors duration-300"
        >
          Reset
        </button>
      </div>

      {/* Visa Applications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visaApplications.map((visa) => {
          const { formData, visaDetails } = visa;
          return (
            <div
              key={visa._id}
              className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 animate__animated animate__fadeInUp"
            >
              <div className="flex items-center mb-4">
                <img
                  src={visaDetails.countryImage}
                  alt={visaDetails.countryName}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h2 className="text-xl font-semibold">{visaDetails.countryName}</h2>
              </div>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Visa Type:</span> {visaDetails.visaType}
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
              <button 
              onClick={() => handleDelete(visa._id)}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 animate__animated animate__pulse animate__infinite">
                Cancel
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VisaApplications;