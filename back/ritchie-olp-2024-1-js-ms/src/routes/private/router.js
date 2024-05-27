const express = require('express');
const userRoutes = require('./userRoutes');
const challengeRoutes = require('./challengeRoutes');
const forumRoutes = require('./forumRoutes');
const auditTrail = require('./auditTrailRoutes');

const router = express.Router();

// Users
router.use('/users', userRoutes);


//Challenges
router.use('/challenges', challengeRoutes);

//Forum
router.use('/forum', forumRoutes);

//Audit Trail
router.use('/audit', auditTrail);

module.exports = router;
