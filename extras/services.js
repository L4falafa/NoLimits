// services.js
var jwt = require("jwt-simple");
var moment = require("moment");
var config = require("../config/Config.js");

exports.createToken = function (user) {
  var payload = {
    sub: user.id_usuario,
    iat: moment().unix(),
    exp: moment().add(14, "days").unix(),
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
};