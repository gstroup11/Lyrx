const router = require('express').Router();
const { User } = require('../../models');

// renders home landing page
router.get('/', async (req, res) => {
  try {
    res.render('landingPage');
  } catch (err) {
    res.status(500).json(err);
  }
});

// renders login page
router.get('/login', async (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

// renders signup page
router.get('/signup', async (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});