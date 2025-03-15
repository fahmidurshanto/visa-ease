import React, { useState } from "react";
import "animate.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddVisa = () => {
  const [visaInfo, setVisaInfo] = useState([]);
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Extract form data using e.target
    const form = e.target;
    const countryImage = form.countryImage.value;
    const countryName = form.countryName.value;
    const visaType = form.visaType.value;
    const processingTime = form.processingTime.value;
    const requiredDocuments = Array.from(form.requiredDocuments)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
    const description = form.description.value;
    const ageRestriction = form.ageRestriction.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const applicationMethod = form.applicationMethod.value;

    const formData = {
      countryImage,
      countryName,
      visaType,
      processingTime,
      requiredDocuments,
      description,
      ageRestriction,
      fee,
      validity,
      applicationMethod
    };

    setVisaInfo(formData)

    // Send data to the backend
    fetch("https://visa-ease-backend.vercel.app/added-visa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(visaInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Visa added successfully!");
          form.reset(); // Reset the form after successful submission
        } else {
          toast.error("Failed to add visa. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
        toast.error("An error occurred. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 animate__animated animate__fadeIn">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 animate__animated animate__fadeInDown">
          Add Visa
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Country Image */}
          <div className="animate__animated animate__fadeInLeft">
            <label className="block text-sm font-medium mb-2">Country Image URL</label>
            <input
              type="text"
              name="countryImage"
              className="w-countryName px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter image URL"
              required
            />
          </div>

          {/* Country Name */}
          <div className="animate__animated animate__fadeInLeft" style={{ animationDelay: "0.1s" }}>
            <label className="block text-sm font-medium mb-2">Country Name</label>
            <input
              type="text"
              name="countryName"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter country name"
              required
            />
          </div>

          {/* Visa Type (Dropdown) */}
          <div className="animate__animated animate__fadeInLeft" style={{ animationDelay: "0.2s" }}>
            <label className="block text-sm font-medium mb-2">Visa Type</label>
            <select
              name="visaType"
              className="wprocessingTime px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Visa Type</option>
              <option value="Schengen Tourist Visa">Schengen Tourist Visa</option>
              <option value="Student Visa">Student Visa</option>
              <option value="Official Visa">Official Visa</option>
              <option value="Business Visa">Business Visa</option>
              <option value="Work Visa">Work Visa</option>
              <option value="Tourist Visa">Tourist Visa</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Processing Time */}
          <div className="animate__animated animate__fadeInLeft" style={{ animationDelay: "0.3s" }}>
            <label className="block text-sm font-medium mb-2">Processing Time</label>
            <input
              type="text"
              name="processingTime"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter processing time (e.g., 10 working days)"
              required
            />
          </div>

          {/* Required Documents (Checkboxes) */}
          <div className="animate__animated animate__fadeInLeft" style={{ animationDelay: "0.4s" }}>
            <label className="block text-sm font-medium mb-2">Required Documents</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Valid passport"
                  className="mr-2"
                />
                Valid passport
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Travel insurance"
                  className="mr-2"
                />
                Travel insurance
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Flight itinerary"
                  className="mr-2"
                />
                Flight itinerary
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Hotel bookings"
                  className="mr-2"
                />
                Hotel bookings
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Proof of financial means"
                  className="mr-2"
                />
                Proof of financial means
              </label>
            </div>
          </div>

          {/* Description */}
          <div className="animate__animated animate__fadeInLeft" style={{ animationDelay: "0.5s" }}>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              name="description"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter visa description"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Age Restriction */}
          <div className="animate__animated animate__fadeInLeft" style={{ animationDelay: "0.6s" }}>
            <label className="block text-sm font-medium mb-2">Age Restriction</label>
            <input
              type="text"
              name="ageRestriction"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter age restriction (e.g., None)"
              required
            />
          </div>

          {/* Fee */}
          <div className="animate__animated animate__fadeInLeft" style={{ animationDelay: "0.7s" }}>
            <label className="block text-sm font-medium mb-2">Fee</label>
            <input
              type="number"
              name="fee"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter visa fee"
              required
            />
          </div>

          {/* Validity */}
          <div className="animate__animated animate__fadeInLeft" style={{ animationDelay: "0.8s" }}>
            <label className="block text-sm font-medium mb-2">Validity</label>
            <input
              type="text"
              name="validity"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter visa validity (e.g., 90 days)"
              required
            />
          </div>

          {/* Application Method */}
          <div className="animate__animated animate__fadeInLeft" style={{ animationDelay: "0.9s" }}>
            <label className="block text-sm font-medium mb-2">Application Method</label>
            <input
              type="text"
              name="applicationMethod"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter application method (e.g., In-person embassy application)"
              required
            />
          </div>

          {/* Add Visa Button */}
          <div className="animate__animated animate__fadeInUp">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200 cursor-pointer"
            >
              Add Visa
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default AddVisa;