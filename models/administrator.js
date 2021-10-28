const mongoose = require("mongoose");
const Joi = require("joi");

const administratorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  isAdministrator: { type: Boolean, default: true },
});

const Administrator = mongoose.model("Administrator", administratorSchema);

function validateAdministrator(administrator) {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  return schema.validate(administrator);
}

exports.Administrator = Administrator;
exports.validate = validateAdministrator;
