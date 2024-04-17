const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

router.get('/posts', reportController.generatePostReport);
router.get('/small', reportController.generateSmallReport);

module.exports = router;
