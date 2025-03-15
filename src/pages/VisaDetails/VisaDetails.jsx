import React, { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const VisaDetails = () => {
  // State to manage modal visibility and selected visa
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVisa, setSelectedVisa] = useState(null);

  // Access user data from AuthContext
  const { user } = useContext(AuthContext);

  // Load visa details using react-router-dom's useLoaderData
  const visaDetails = useLoaderData();

  console.log(visaDetails)



  // State to manage form data
  const [formData, setFormData] = useState({
    email: user?.email,
    firstName: "",
    lastName: "",
    appliedDate: new Date().toISOString().split("T")[0],
    fee: visaDetails?.fee,
  });

  // Handle Apply for Visa button click
  const handleApplyClick = (visa) => {
    setSelectedVisa(visa);
    setIsModalOpen(true);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = visaDetails._id;
    const appliedVisa = {
      formData, 
      visaDetails
    }
    fetch(`https://visa-ease-backend.vercel.app/applied-visa/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appliedVisa),
    })
      .then(res => res.json())
      .then((data) => {
        setIsModalOpen(false); 
        console.log("Response data:", data);
        toast.success("Visa applied successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Failed to apply for visa. Please try again later.");
      })
      setIsModalOpen(false)
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 animate__animated animate__fadeIn">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 animate__animated animate__fadeInDown">
          Visa Details
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Render visa details */}
          <div className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp">
            <img
              src={visaDetails.countryImage}
              alt={visaDetails.countryName}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-bold mt-4">{visaDetails.countryName}</h2>
            <p className="text-gray-600">{visaDetails.visaType}</p>
            <div className="mt-4 space-y-2">
              <p>
                <span className="font-semibold">Processing Time:</span>{" "}
                {visaDetails.processingTime}
              </p>
              <p>
                <span className="font-semibold">Fee:</span> ${visaDetails.fee}
              </p>
              <p>
                <span className="font-semibold">Validity:</span> {visaDetails.validity}
              </p>
            </div>
            <button
              onClick={() => handleApplyClick(visaDetails)}
              className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Apply for Visa
            </button>
          </div>
        </div>
      </div>
      <ToastContainer 
      position="bottom-right" />

      {/* Apply for Visa Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
           {/* Toast Container for notifications */}
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate__animated animate__fadeIn">
            <h2 className="text-2xl font-bold mb-6">Apply for {selectedVisa?.visaType}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  required
                  disabled
                />
              </div>

              {/* First Name Field */}
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

              {/* Last Name Field */}
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

              {/* Applied Date Field */}
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

              {/* Fee Field */}
              <div>
                <label className="block text-sm font-medium mb-2">Fee</label>
                <input
                  type="number"
                  name="fee"
                  value={formData.fee}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled
                />
              </div>

              {/* Form Actions */}
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

     
    </div>
  );
};

export default VisaDetails;