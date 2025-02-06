const xml2js = require("xml2js");
const CreditReport = require("../models/creditReportModel");

const parseXML = (xmlData) => {
    return new Promise((resolve, reject) => {
        xml2js.parseString(xmlData, { explicitArray: false }, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

exports.uploadXML = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const xmlData = req.file.buffer.toString();
        const parsedData = await parseXML(xmlData);

        const extractedData = {
            name: `${parsedData?.INProfileResponse?.Current_Application?.Current_Application_Details?.Current_Applicant_Details?.First_Name || "N/A"} ${parsedData?.INProfileResponse?.Current_Application?.Current_Application_Details?.Current_Applicant_Details?.Last_Name || "N/A"}`,
            mobile: parsedData?.INProfileResponse?.Current_Application?.Current_Application_Details?.Current_Applicant_Details?.MobilePhoneNumber || "N/A",
            pan: parsedData?.INProfileResponse?.CAIS_Account?.CAIS_Account_DETAILS?.[0]?.CAIS_Holder_Details?.Income_TAX_PAN || "N/A",
            creditScore: parseInt(parsedData?.INProfileResponse?.SCORE?.BureauScore) || 0,
            reportSummary: {
                totalAccounts: parseInt(parsedData?.INProfileResponse?.CAIS_Account?.CAIS_Summary?.Credit_Account?.CreditAccountTotal) || 0,
                activeAccounts: parseInt(parsedData?.INProfileResponse?.CAIS_Account?.CAIS_Summary?.Credit_Account?.CreditAccountActive) || 0,
                closedAccounts: parseInt(parsedData?.INProfileResponse?.CAIS_Account?.CAIS_Summary?.Credit_Account?.CreditAccountClosed) || 0,
                currentBalance: parseFloat(parsedData?.INProfileResponse?.CAIS_Account?.CAIS_Summary?.Total_Outstanding_Balance?.Outstanding_Balance_All) || 0,
                securedAmount: parseFloat(parsedData?.INProfileResponse?.CAIS_Account?.CAIS_Summary?.Total_Outstanding_Balance?.Outstanding_Balance_Secured) || 0,
                unsecuredAmount: parseFloat(parsedData?.INProfileResponse?.CAIS_Account?.CAIS_Summary?.Total_Outstanding_Balance?.Outstanding_Balance_UnSecured) || 0,
                last7DaysEnquiries: parseInt(parsedData?.INProfileResponse?.TotalCAPS_Summary?.TotalCAPSLast7Days) || 0,
            },
            creditAccounts: parsedData?.INProfileResponse?.CAIS_Account?.CAIS_Account_DETAILS?.map((acc, index) => ({
                creditCard: (index + 1).toString(),
                bank: acc?.Subscriber_Name || "N/A",
                address: [
                    acc?.CAIS_Holder_Address_Details?.First_Line_Of_Address_non_normalized,
                    acc?.CAIS_Holder_Address_Details?.Second_Line_Of_Address_non_normalized,
                    acc?.CAIS_Holder_Address_Details?.City_non_normalized,
                    acc?.CAIS_Holder_Address_Details?.State_non_normalized
                ].filter(Boolean).join(", "),
                accountNumber: acc?.Account_Number || "N/A",
                amountOverdue: acc?.Amount_Past_Due ? parseFloat(acc.Amount_Past_Due) : 0,
                currentBalance: acc?.Current_Balance ? parseFloat(acc.Current_Balance) : 0
            })) || []
        };

        const report = new CreditReport(extractedData);
        await report.save();

        res.status(201).json({ message: "Data saved successfully", data: extractedData });

    } catch (error) {
        console.error("Error uploading XML:", error);
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
};
