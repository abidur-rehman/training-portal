const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const Quiz = require('../models/quiz');

const getQuizData = async (req, res, next) => {
  let quizes;
  try {
    quizes = await Quiz.find({}, '');
  } catch (err) {
    const error = new HttpError(
      'Fetching quizes failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({ quizes: quizes.map(quiz => quiz.toObject({ getters: true })) });
};

exports.getQuizData = getQuizData;
