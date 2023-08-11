const express = require("express");

const router = express.Router();

router.post("/send-email", require("../controllers/email").sendEmail);

module.exports = router;
