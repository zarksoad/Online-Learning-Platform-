const express = require('express');
const { getAudit } = require("../../controllers/auditController");

const router = express.Router();

router.get('/', getAudit);

module.exports = router;