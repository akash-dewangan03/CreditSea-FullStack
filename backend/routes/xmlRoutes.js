const express = require("express");
const { uploadXML } = require("../controllers/xmlController");
const upload = require("../middleware/uploadMiddleware");
const CreditReport = require("../models/creditReportModel");

const router = express.Router();

router.post("/upload", upload.single("file"), uploadXML);

router.get("/reports", async (req, res) => {
    try {
        const reports = await CreditReport.find().sort({ createdAt: -1 }).limit(1);
        res.status(200).json(reports.length ? reports[0] : {});
    } catch (error) {
        res.status(500).json({ error: "Error fetching reports" });
    }
});

module.exports = router;

