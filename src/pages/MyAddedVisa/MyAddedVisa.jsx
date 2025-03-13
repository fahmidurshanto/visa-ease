import { useEffect, useState } from "react";

const MyAddedVisa = () => {
    const [addedVisa, setAddedVisa] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVisa, setSelectedVisa] = useState(null);

    // Fetch visa data on component mount
    useEffect(() => {
        fetch("http://localhost:5000/added-visa")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setAddedVisa(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Handle update button click
    const handleUpdate = (visa) => {
        setSelectedVisa(visa);
        setIsModalOpen(true);
    };

    // Handle delete button click
    const handleDelete = () => {
        console.log("Delete button clicked");
    };

  // Handle form submission to update visa data
const handleUpdateVisa = (updatedVisa) => {
    fetch(`http://localhost:5000/added-visa/${updatedVisa._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedVisa),
    })
        .then((response) => response.json())
        .then((result) => {
            // If update was successful, update the state with the original updatedVisa object
            if(result.acknowledged) {
                setAddedVisa((prevVisa) =>
                    prevVisa.map((visa) => (visa._id === updatedVisa._id ? updatedVisa : visa))
                );
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

    // Modal component for updating visa information
    const UpdateVisaModal = ({ visa, onClose, onUpdate }) => {
        const [formData, setFormData] = useState(visa);

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            onUpdate(formData);
            onClose();
        };

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
                    <h2 className="text-xl font-bold mb-4">Update Visa Information</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Country Name</label>
                                <input
                                    type="text"
                                    name="countryName"
                                    value={formData.countryName}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Visa Type</label>
                                <input
                                    type="text"
                                    name="visaType"
                                    value={formData.visaType}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Processing Time</label>
                                <input
                                    type="text"
                                    name="processingTime"
                                    value={formData.processingTime}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Age Restriction</label>
                                <input
                                    type="text"
                                    name="ageRestriction"
                                    value={formData.ageRestriction}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Fee</label>
                                <input
                                    type="text"
                                    name="fee"
                                    value={formData.fee}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Validity</label>
                                <input
                                    type="text"
                                    name="validity"
                                    value={formData.validity}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Application Method</label>
                                <input
                                    type="text"
                                    name="applicationMethod"
                                    value={formData.applicationMethod}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                />
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end space-x-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-amber-500 text-white py-2 px-4 rounded hover:bg-amber-600"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

    return (
        <div className="container mx-auto py-40">
            <h1 className="text-2xl font-bold text-center">My Added Visas:  {addedVisa.length}</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {addedVisa.map((visa) => (
                    <div key={visa._id} className="space-x-4 bg-gray-100 p-4 rounded-lg shadow-lg mt-4">
                        <img src={visa.countryImage} alt={visa.countryName} className="w-24 h-24 object-cover rounded-lg" />
                        <div className="space-y-2">
                            <h2 className="text-xl font-bold">{visa.countryName}</h2>
                            <p className="text-gray-600"><span className="font-bold">Visa type: </span>{visa.visaType}</p>
                            <p className="text-gray-600"><span className="font-bold">Processing time:</span>{visa.processingTime}</p>
                            <p className="text-gray-600"><span className="font-bold">Age restriction:</span>{visa.ageRestriction}</p>
                            <p className="text-gray-600"><span className="font-bold">Fee:</span> {visa.fee}</p>
                            <p className="text-gray-600"><span className="font-bold">Validity:</span>{visa.validity}</p>
                            <p className="text-gray-600"><span className="font-bold">Application Method:</span>{visa.applicationMethod}</p>
                            <p className="text-gray-600 w-full h-36">{visa.description}</p>
                        </div>
                        <div className="space-x-4 mt-4">
                            <button onClick={() => handleUpdate(visa)} className="bg-amber-500 text-white py-1 px-4 rounded hover:bg-amber-600">Update</button>
                            <button onClick={handleDelete} className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            {isModalOpen && (
                <UpdateVisaModal
                    visa={selectedVisa}
                    onClose={() => setIsModalOpen(false)}
                    onUpdate={handleUpdateVisa}
                />
            )}
        </div>
    );
};

export default MyAddedVisa;