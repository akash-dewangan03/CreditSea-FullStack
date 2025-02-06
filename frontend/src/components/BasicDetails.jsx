import React from "react";

const BasicDetails = ({ data = {} }) => (
    <div className="mb-6 mt-3">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Basic Details</h2>
        <table className="min-w-full border-collapse table-auto shadow-md"> 
            <thead>
                <tr className="bg-gray-100 text-left text-gray-600 font-medium">
                    <th className="border border-gray-300 px-4 py-2 font-bold">Field</th> 
                    <th className="border border-gray-300 px-4 py-2 font-bold">Value</th> 
                </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-bold">Name:</td> 
                    <td className="border border-gray-300 px-4 py-2">{data?.name || "N/A"}</td> 
                </tr>
                <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-bold">Mobile:</td> 
                    <td className="border border-gray-300 px-4 py-2">{data?.mobile || "N/A"}</td> 
                </tr>
                <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-bold">PAN:</td> 
                    <td className="border border-gray-300 px-4 py-2">{data?.pan || "N/A"}</td> 
                </tr>
                <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-bold">Credit Score:</td> 
                    <td className="border border-gray-300 px-4 py-2">{data?.creditScore || "N/A"}</td> 
                </tr>
            </tbody>
        </table>
    </div>
);

export default BasicDetails;