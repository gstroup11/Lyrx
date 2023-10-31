const Router = require("express").Router();

const apiRoutes = require("./apis/index");
const landingPage = require("./mainLandingPage");

Router.use("/api", apiRoutes);
Router.use("/", landingPage);

module.exports = Router;