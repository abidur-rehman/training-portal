const express = require('express');
const { check } = require('express-validator');

const quizController = require('../controllers/quiz-controllers');

const router = express.Router();

router.get('/', quizController.getQuizData);

module.exports = router;
