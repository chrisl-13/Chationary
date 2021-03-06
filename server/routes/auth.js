const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/signup', userController.createUser, (req, res) => {
  return res.sendStatus(200);
});

router.post('/signin', userController.verifyUser, (req, res) => {
  return res.sendStatus(200);
});

router.post('/checkusername', userController.checkUsername, (req, res) => {
  return res.status(200).json(res.locals.nameExists);
});

module.exports = router;
