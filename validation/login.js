const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // Valid email
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Email not empty
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  // Password not empty
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
