const express = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/users-controllers');
// const fileUpload = require('../middleware/file-upload');

const router = express.Router();

router.get('/', usersController.getUsers);

router.post(
  '/signup',
  [
    check('name')
      .not()
      .isEmpty(),
    check('email')
      .normalizeEmail()
      .isEmail(),
    check('password').isLength({ min: 6 })
  ],
  usersController.signup
);

router.post(
  '/updateProfile',
  [
    check('firstname')
      .not()
      .isEmpty(),
    check('lastname')
      .not()
      .isEmpty(),
    check('email')
      .normalizeEmail()
      .isEmail(),
    check('emailOriginal')
      .normalizeEmail()
      .isEmail(),
  ],
  usersController.updateProfile
);

router.post(
  '/updatePass',
  [
    check('email')
      .normalizeEmail()
      .isEmail(),
    check('password'),
    check('newPassword').isLength({ min: 6 })
  ],
  usersController.updatePass
);

router.post('/login', usersController.login);

module.exports = router;
