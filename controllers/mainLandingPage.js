const router = require('express').Router();
const { User } = require('../models/User');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Check if the user is logged in
    const isLoggedIn = req.session.loggedIn || false;

    // Pass the loggedIn status to the Handlebars template
    res.render('home', { isLoggedIn });
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

router.get('/search', withAuth, async (req, res) => {
  try {
    // Check if the user is logged in
    const isLoggedIn = req.session.loggedIn || false;

    // Pass the loggedIn status to the Handlebars template
    res.render('search', { isLoggedIn });
  }  catch (err) {
    res.status(500).json(err);
  }   
});

router.get('/contact', async (req, res) => {
  try {
    // Check if the user is logged in
    const isLoggedIn = req.session.loggedIn || false;

    // Pass the loggedIn status to the Handlebars template
    res.render('contact', { isLoggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/home', async (req, res) => {
  try {
    // Check if the user is logged in
    const isLoggedIn = req.session.loggedIn || false;

    // Pass the loggedIn status to the Handlebars template
    res.render('home', { isLoggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Logout route
router.get('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
      }
      res.redirect('/'); // Redirect to the home page or any other page after logout
    });
  } else {
    res.redirect('/'); // Redirect to the home page even if the user is not logged in
  }
});

module.exports = router;