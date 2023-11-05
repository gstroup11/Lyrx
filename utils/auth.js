function withAuth(req, res, next) {
  if (!req.session.loggedIn) {
    res.redirect('/login'); // Redirect to the login page if not authenticated
  } else {
    next(); // Proceed to the next middleware or route handler
  }
}

module.exports = withAuth;