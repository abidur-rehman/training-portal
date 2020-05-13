const express = require('express');
const { check } = require('express-validator');

const sectionController = require('../controllers/section-controllers');
// const fileUpload = require('../middleware/file-upload');

const router = express.Router();

router.get('/', sectionController.getSectionData);

module.exports = router;
