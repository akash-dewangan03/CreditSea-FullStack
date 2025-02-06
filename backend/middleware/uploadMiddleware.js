const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ 
    storage, 
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "text/xml" || file.originalname.endsWith(".xml")) {
            cb(null, true);
        } else {
            cb(new Error("Only XML files are allowed!"), false);
        }
    }
});


module.exports = upload;