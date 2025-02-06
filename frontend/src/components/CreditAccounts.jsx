import React from "react";

const CreditAccounts = ({ accounts = [] }) => (
    <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Credit Accounts Information</h2>
        {accounts.length > 0 ? (
            <table className="min-w-full border-collapse table-auto shadow-md">
                <thead>
                    <tr className="bg-gray-100 text-left text-gray-600 font-medium">
                        <th className="border border-gray-300 px-4 py-2 font-bold">Credit Card #</th>
                        <th className="border border-gray-300 px-4 py-2 font-bold">Bank</th>
                        <th className="border border-gray-300 px-4 py-2 font-bold">Address</th>
                        <th className="border border-gray-300 px-4 py-2 font-bold">Account Number</th>
                        <th className="border border-gray-300 px-4 py-2 font-bold">Amount Overdue</th>
                        <th className="border border-gray-300 px-4 py-2 font-bold">Current Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map((acc, index) => (
                        <tr key={index} className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                            <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                            <td className="border border-gray-300 px-4 py-2">{acc?.bank || "N/A"}</td>
                            <td className="border border-gray-300 px-4 py-2">{acc?.address || "N/A"}</td>
                            <td className="border border-gray-300 px-4 py-2">{acc?.accountNumber || "N/A"}</td>
                            <td className="border border-gray-300 px-4 py-2">{acc?.amountOverdue === 0 ? "0" : acc?.amountOverdue}</td>
                            <td className="border border-gray-300 px-4 py-2">{acc?.currentBalance === 0 ? "0" : acc?.currentBalance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        ) : (
            <p className="text-gray-600 text-center">No credit accounts found.</p>
        )}
    </div>
);

export default CreditAccounts;