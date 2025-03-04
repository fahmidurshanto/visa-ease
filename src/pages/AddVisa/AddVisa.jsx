import React, { useState } from "react";
import "animate.css";

const AddVisa = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    countryImage: "",
    countryName: "",
    visaType: "",
    processingTime: "",
    requiredDocuments: [],
    description: "",
    ageRestriction: "",
    fee: "",
    validity: "",
    applicationMethod: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const updatedDocuments = checked
        ? [...formData.requiredDocuments, value]
        : formData.requiredDocuments.filter((doc) => doc !== value);
      setFormData({ ...formData, requiredDocuments: updatedDocuments });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add logic to submit the form data to an API or state management
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
              value={formData.countryImage}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter image URL (e.g., from imgbb)"
              required
            />
          </div>

          {/* Country Name */}
          <div className="animate__animated animate__fadeInLeft" style={{ animationDelay: "0.1s" }}>
            <label className="block text-sm font-medium mb-2">Country Name</label>
            <input
              type="text"
              name="countryName"
              value={formData.countryName}
              onChange={handleChange}
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
              value={formData.visaType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Visa Type</option>
              <option value="Tourist Visa">Tourist Visa</option>
              <option value="Student Visa">Student Visa</option>
              <option value="Official Visa">Official Visa</option>
            </select>
          </div>

          {/* Processing Time */}
          <div className="animate__animated animate__fadeInLeft" style={{ animationDelay: "0.3s" }}>
            <label className="block text-sm font-medium mb-2">Processing Time</label>
            <input
              type="text"
              name="processingTime"
              value={formData.processingTime}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter processing time (e.g., 10-15 Business Days)"
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
                  value="Valid Passport"
                  checked={formData.requiredDocuments.includes("Valid Passport")}
                  onChange={handleChange}
                  className="mr-2"
                />
                Valid Passport
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Visa Application Form"
                  checked={formData.requiredDocuments.includes("Visa Application Form")}
                  onChange={handleChange}
                  className="mr-2"
                />
                Visa Application Form
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Recent Passport-Sized Photograph"
                  checked={formData.requiredDocuments.includes("Recent Passport-Sized Photograph")}
                  onChange={handleChange}
                  className="mr-2"
                />
                Recent Passport-Sized Photograph
              </label>
            </div>
          </div>

          {/* Description */}
          <div className="animate__animated animate__fadeInLeft" style={{ animationDelay: "0.5s" }}>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
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
              type="number"
              name="ageRestriction"
              value={formData.ageRestriction}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter age restriction"
              required
            />
          </div>

          {/* Fee */}
          <div className="animate__animated animate__fadeInLeft" style={{ animationDelay: "0.7s" }}>
            <label className="block text-sm font-medium mb-2">Fee</label>
            <input
              type="number"
              name="fee"
              value={formData.fee}
              onChange={handleChange}
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
              value={formData.validity}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter visa validity (e.g., 6 Months)"
              required
            />
          </div>

          {/* Application Method */}
          <div className="animate__animated animate__fadeInLeft" style={{ animationDelay: "0.9s" }}>
            <label className="block text-sm font-medium mb-2">Application Method</label>
            <input
              type="text"
              name="applicationMethod"
              value={formData.applicationMethod}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter application method (e.g., Online)"
              required
            />
          </div>

          {/* Add Visa Button */}
          <div className="animate__animated animate__fadeInUp">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Add Visa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVisa;