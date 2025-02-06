import React from "react";

const Loader = () => (
    <div className="flex justify-center items-center space-x-2 mt-4">
        <div className="w-8 h-8 border-4 border-t-4 border-indigo-500 border-solid rounded-full animate-spin"></div>
        <span className="text-lg text-gray-700">Loading...</span>
    </div>
);

export default Loader;