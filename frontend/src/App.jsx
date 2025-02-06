import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiUpload } from 'react-icons/fi';
import BasicDetails from "./components/BasicDetails";
import CreditAccounts from "./components/CreditAccounts";
import Loader from "./components/Loader";
import ReportSummary from "./components/ReportSummary";

const App = () => {
    const [file, setFile] = useState(null);
    const [report, setReport] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setFile(null);
        setReport(null);
        setError(null);
    }, []);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return alert("Please select an XML file");

        const formData = new FormData();
        formData.append("file", file);

        try {
            setLoading(true);
            await axios.post("https://creditsea-fullstack.onrender.com/api/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            fetchReport();
        } catch (err) {
            setError("Error uploading file.");
            console.error("Upload error:", err);
        } finally {
            setLoading(false);
        }
    };

    const fetchReport = async () => {
        try {
            const { data } = await axios.get("https://creditsea-fullstack.onrender.com/api/reports");
            setReport(data);
        } catch (err) {
            setError("Error fetching data.");
            console.error("Fetch error:", err);
        }
    };

    return (
        <div className="font-sans bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 min-h-screen flex flex-col">
             <div className="text-white py-6 px-4 bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800">
                <div className="container mx-auto text-center w-full">
                    <h1 className="text-5xl font-extrabold tracking-tight mb-4">CREDITSEA</h1>
                    <p className="text-xl font-medium">Your Financial Data at a Glance</p>
                </div>
            </div>

            <main className="container mx-auto p-6 flex-grow bg-gray-100">
                <div className="flex flex-col gap-8">

                    {/* Row 1: Upload Section */}
                    <div className="bg-white shadow-xl rounded-3xl p-8 flex flex-row md:flex-row items-center justify-center border-dashed border-2 border-gray-400 ">
                        <div className="md:w-1/2 flex flex-col items-center justify-center md:mr-3"> 
                            <input
                                id="fileInput"
                                type="file"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                            <label htmlFor="fileInput" className="flex flex-col items-center justify-center cursor-pointer">
                                <div className="flex items-center justify-center mb-5">
                                    <FiUpload className="w-10 h-10 text-gray-500" />
                                </div>
                                <p className="text-gray-700 font-medium">Upload your file</p>
                                <p className="text-gray-500 text-sm mt-1">XML</p>
                            </label>
                            {file && <p className="text-gray-600 mt-2 text-center">{file.name}</p>} 
                            {loading && <Loader />}
                            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
                        </div>
                    </div>

                    <div className="md:w-1/ mt-4 md:mt-0 flex justify-center items-center"> 
                        <button
                            onClick={handleUpload}
                            className="bg-indigo-700 text-white py-3 px-6 rounded-lg w-full md:w-auto hover:bg-indigo-600 transition-all duration-200 focus:ring-2 focus:ring-indigo-300"
                            disabled={loading || !file}
                        >
                            Upload File
                        </button>
                    </div>

                    {/* Row 2: Extracted Data Section */}
                    <div className="flex justify-center"> 
                        {report && (
                            <div className="bg-white shadow-xl rounded-lg p-8 overflow-x-auto w-full md:w-2/3"> 
                                <div className="bg-indigo-200 py-3 px-4 rounded-t-lg"> 
                                    <h2 className="text-2xl font-semibold text-black text-center"> 
                                        {report?.name || "N/A"}'s Financial Data
                                    </h2>
                                </div>
                                <BasicDetails data={report} />
                                <ReportSummary summary={report.reportSummary} />
                                <CreditAccounts accounts={report.creditAccounts} />
                            </div>
                        )}
                    </div>

                </div>
            </main>

            <footer className="bg-gray-800 text-white py-4 text-center px-4">
                <div className="container mx-auto">
                    <p>&copy; 2025 XYZ All rights reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
