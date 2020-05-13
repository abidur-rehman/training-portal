const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const Section = require('../models/section');

const getSectionData = async (req, res, next) => {
  let sections;
  try {
    sections = await Section.find({}, '');
  } catch (err) {
    const error = new HttpError(
      'Fetching users failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({ sections: sections.map(section => section.toObject({ getters: true })) });
};

exports.getSectionData = getSectionData;
