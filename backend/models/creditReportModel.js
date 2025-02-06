const mongoose = require("mongoose");

const CreditReportSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    pan: String,
    creditScore: Number,
    reportSummary: {
        totalAccounts: Number,
        activeAccounts: Number,
        closedAccounts: Number,
        currentBalance: Number,
        securedAmount: Number,
        unsecuredAmount: Number,
        last7DaysEnquiries: Number,
    },
    creditAccounts: [{
        creditCard: String,
        bank: String,
        address: String,
        accountNumber: String,
        amountOverdue: Number,
        currentBalance: Number
    }]
}, { timestamps: true });

module.exports = mongoose.model("CreditReport", CreditReportSchema);
