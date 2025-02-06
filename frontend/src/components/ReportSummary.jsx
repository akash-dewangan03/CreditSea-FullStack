import React from "react";

const ReportSummary = ({ summary = {} }) => (
    <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Report Summary</h2>
        <table className="min-w-full border-collapse table-auto shadow-md">
            <thead>
                <tr className="bg-gray-100 text-left text-gray-600 font-medium">
                    <th className="border border-gray-300 px-4 py-2 font-bold">Field</th>
                    <th className="border border-gray-300 px-4 py-2 font-bold">Value</th>
                </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-bold">Total Accounts:</td>
                    <td className="border border-gray-300 px-4 py-2">{summary?.totalAccounts ?? "N/A"}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-bold">Active Accounts:</td>
                    <td className="border border-gray-300 px-4 py-2">{summary?.activeAccounts ?? "N/A"}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-bold">Closed Accounts:</td>
                    <td className="border border-gray-300 px-4 py-2">{summary?.closedAccounts ?? "N/A"}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-bold">Current Balance:</td>
                    <td className="border border-gray-300 px-4 py-2">{summary?.currentBalance ?? "N/A"}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-bold">Secured Amount:</td>
                    <td className="border border-gray-300 px-4 py-2">{summary?.securedAmount ?? "N/A"}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-bold">Unsecured Amount:</td>
                    <td className="border border-gray-300 px-4 py-2">{summary?.unsecuredAmount ?? "N/A"}</td>
                </tr>
                <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-bold">Last 7 Days Enquiries:</td>
                    <td className="border border-gray-300 px-4 py-2">{summary?.last7DaysEnquiries ?? "N/A"}</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default ReportSummary;