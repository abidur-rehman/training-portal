const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');
const User = require('../models/user');

const validate = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }
}

const hashedPassword = async (password, next) => {
  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError(
      'Could not create user, please try again.',
      500
    );
    return next(error);
  }
  return hashedPassword;
}

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, '-password');
  } catch (err) {
    const error = new HttpError(
      'Fetching users failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({ users: users.map(user => user.toObject({ getters: true })) });
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  const { name, firstname, lastname, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      'User exists already, please login instead.',
      422
    );
    return next(error);
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError(
      'Could not create user, please try again.',
      500
    );
    return next(error);
  }

  const createdUser = new User({
    name,
    firstname,
    lastname,
    email,
    password: hashedPassword,
    places: []
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500
    );
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
        { userId: createdUser.id, email: createdUser.email },
        'supersecret_dont_share',
        { expiresIn: '1h' }
    );
  } catch (err) {
    const error = new HttpError(
        'Signing up failed, please try again later.',
        500
    );
    return next(error);
  }

  // res.status(201).json({ user: createdUser.toObject({ getters: true }) });
  res.status(201).json({
    userId: createdUser.id, name, firstname, lastname, email, token: token
  });
};

const updateProfile = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  let findUser;
  try {
    findUser = await User.findOne({ email: req.body.emailOriginal });
  } catch (err) {
    const error = new HttpError(
      'Update profile failed, please try again later.',
      500
    );
    return next(error);
  }

  if (typeof findUser === 'undefined') {
    const error = new HttpError(
      'User not found, please try agian.',
      422
    );
    return next(error);
  }

  try {
    const { firstname, lastname, email } = req.body;
    findUser.firstname = firstname;
    findUser.lastname = lastname;
    findUser.email = email;
    await findUser.save();
  } catch (err) {
    const error = new HttpError(
      'Update profile failed, please try again later.',
      500
    );
    return next(error);
  }

  const { id, name, firstname, lastname, email } = findUser;
  res.status(200).json({
    userId: id, name, firstname, lastname, email, message: 'Profile updated successfully'
  });
};

const updatePass = async (req, res, next) => {
  await validate(req, res, next);

  let findUser;
  try {
    findUser = await User.findOne({ email: req.body.email });
  } catch (err) {
    const error = new HttpError(
      'Update password failed, please try again later.',
      500
    );
    return next(error);
  }

  if (typeof findUser === 'undefined') {
    const error = new HttpError(
      'User not found, please try agian.',
      422
    );
    return next(error);
  }

  let isValidPassword;
  try {
    isValidPassword = await bcrypt.compare(req.body.password, findUser.password);
  } catch (err) {
    const error = new HttpError(
      'There seems to be a problem with your credentials. Please check your credentials and try again.',
      401
    );
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError(
      'Invalid credentials.',
      401
    );
    return next(error);
  }

  try {
    const { newPassword } = req.body;
    findUser.password = await hashedPassword(newPassword);
    await findUser.save();
  } catch (err) {
    const error = new HttpError(
      'Update password failed, please try again later.',
      500
    );
    next(error);
  }

  const { id, name, firstname, lastname, email } = findUser;
  res.json({
    userId: id, name, firstname, lastname, email, message: 'Password updated successfully'
  });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      'Loggin in failed, please try again later.',
      500
    );
    return next(error);
  }

  let isValidPassword;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError(
        'There seems to be a problem with your credentials. Please check your credentials and try again.',
        401
    );
    return next(error);
  }

  if (!existingUser || !isValidPassword) {
    const error = new HttpError(
      'Invalid credentials, could not log you in.',
      401
    );
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
        { userId: existingUser.id, email: existingUser.email },
        'supersecret_dont_share',
        { expiresIn: '1h' }
    );
  } catch (err) {
    const error = new HttpError(
        'Logging in failed, please try again later.',
        500
    );
    return next(error);
  }

  const { name, firstname, lastname } = existingUser;
  res.json({
    userId: existingUser.id, name, firstname, lastname, email, token: token
  });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.updateProfile = updateProfile;
exports.updatePass = updatePass;
exports.login = login;
