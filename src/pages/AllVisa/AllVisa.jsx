import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "animate.css";

const AllVisa = () => {
  const [visas, setVisas] = useState([]);
  const [filteredVisas, setFilteredVisas] = useState([]);
  const [selectedVisaType, setSelectedVisaType] = useState("All");

  useEffect(() => {
    fetch("https://visa-ease-backend.vercel.app/all-visa")
      .then((res) => res.json())
      .then((data) => {
        setVisas(data);
        setFilteredVisas(data); // Initialize filtered visas with all visas
      });
  }, []);

  // Handle filter change
  const handleFilterChange = (event) => {
    const selectedType = event.target.value;
    setSelectedVisaType(selectedType);

    if (selectedType === "All") {
      setFilteredVisas(visas); // Show all visas
    } else {
      // Filter visas based on the selected type
      const filtered = visas.filter((visa) =>
        visa.visaType.toLowerCase().includes(selectedType.toLowerCase())
      );
      setFilteredVisas(filtered); // Show filtered visas
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 animate__animated animate__fadeInDown py-16">
        All Visas
      </h2>

      {/* Filter Dropdown */}
      <div className="flex justify-end mb-8">
        <select
          value={selectedVisaType}
          onChange={handleFilterChange}
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Visa Types</option>
          <option value="Tourist">Tourist</option>
          <option value="Student">Student</option>
          <option value="Business">Business</option>
          <option value="Work">Work</option>
        </select>
      </div>

      {/* Visa Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredVisas.map((visa, index) => (
          <div
            key={visa._id}
            className="animate__animated animate__fadeInUp bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 py-10"
            style={{ "--animate-delay": `${index * 0.1}s` }}
          >
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {visa.countryName}
                </h3>
                <img
                  src={visa.countryImage}
                  alt={visa.countryName}
                  className="w-full h-36 py-5 object-cover"
                />

                <div className="w-full h-32">
                  <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Type:</span> {visa.visaType}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Processing Time:</span>{" "}
                    {visa.processingTime}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Application Method:</span>{" "}
                    {visa.applicationMethod}
                  </p>
                </div>
              </div>
              <Link
                to={`/all-visas/${visa._id}`}
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