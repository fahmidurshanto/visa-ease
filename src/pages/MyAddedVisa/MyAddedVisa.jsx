import { useEffect, useState } from "react";


const MyAddedVisa = () => {

    const [addedVisa, setAddedVisa] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/added-visa")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setAddedVisa(data);
        })
        .catch((error) => {
            console.log(error);
        });
    },[]);

    return (
        <div className="container mx-auto m
        py-40">
            <h1 className="text-2xl font-bold text-center">My Added Visas</h1>
            <h1>{addedVisa.length}</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {addedVisa.map((visa)=>(
                    <div key={visa._id} className=" space-x-4 bg-gray-100 p-4 rounded-lg shadow-lg mt-4">
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
                            <button className="bg-amber-500 text-white py-1 px-4 rounded hover:bg-amber-600">Update</button>
                            <button className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600">Delete</button>
                        </div>
                    </div>
                ))}
                </div>
        </div>
    );
};

export default MyAddedVisa;