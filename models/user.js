const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  isAdministrator: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;
