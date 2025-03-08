import React, { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const VisaDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVisa, setSelectedVisa] = useState(null);
  const {user} = useContext(AuthContext)
  const visaDetails = useLoaderData();
  console.log(visaDetails);
  // Placeholder for visa data
  const visas = [
    {
      countryImage: visaDetails.countryImage,
      countryName: visaDetails.countryName,
      visaType: visaDetails.visaType,
      processingTime: visaDetails.processingTime,
      fee: visaDetails.fee,
      validity: visaDetails.validity,
    },
  ];

  // Placeholder for form data
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    appliedDate: new Date().toISOString().split("T")[0],
    fee: 0,
  });

  // Placeholder for Apply for Visa button click
  const handleApplyClick = (visa) => {
    setSelectedVisa(visa);
    setIsModalOpen(true);
  };

  // Placeholder for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Placeholder for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 animate__animated animate__fadeIn">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 animate__animated animate__fadeInDown">
          Visa Details
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visas.map((visa, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={visa.countryImage}
                alt={visa.countryName}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-bold mt-4">{visa.countryName}</h2>
              <p className="text-gray-600">{visa.visaType}</p>
              <div className="mt-4 space-y-2">
                <p>
                  <span className="font-semibold">Processing Time:</span>{" "}
                  {visa.processingTime}
                </p>
                <p>
                  <span className="font-semibold">Fee:</span> ${visa.fee}
                </p>
                <p>
                  <span className="font-semibold">Validity:</span> {visa.validity}
                </p>
              </div>
              <button
                onClick={() => handleApplyClick(visa)}
                className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Apply for Visa
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Apply for Visa Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate__animated animate__fadeIn">
            <h2 className="text-2xl font-bold mb-6">Apply for {selectedVisa?.visaType}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  required
                  disabled
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Applied Date</label>
                <input
                  type="date"
                  name="appliedDate"
                  value={formData.appliedDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Fee</label>
                <input
                  type="number"
                  name="fee"
                  value={visaDetails.fee}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default VisaDetails;