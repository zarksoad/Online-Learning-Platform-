const fs = require("fs");
const path = require('path');

const filePath = path.join(__dirname, '../auditTrail.json');

exports.getAudit = async () => {
  try {
    const auditTrailData = await fs.promises.readFile(filePath, 'utf8');
    const auditTrail = JSON.parse(auditTrailData);
    return auditTrail;
  } catch (error) {
    console.error(error);
  }
};