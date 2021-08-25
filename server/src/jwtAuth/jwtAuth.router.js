const router = require("express").Router();
const controller = require("./jwtAuth.controller");

const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/register");
