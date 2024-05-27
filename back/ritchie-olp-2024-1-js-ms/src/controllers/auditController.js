const { getAudit } = require("../models/auditTrailModel");

exports.getAudit = async (req, rest) => {
    try{
        const audit = await getAudit();
        rest.status(200).json(audit);
    } catch (err) {
        console.error('GetAudit Error', err);
        rest.status(500).json({ message: 'Server Error'});
    }
}