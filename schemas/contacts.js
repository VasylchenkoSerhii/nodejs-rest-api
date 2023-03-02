const Joi = require("joi");
const addContactsShema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

const addContactStatusSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  addContactsShema,
  addContactStatusSchema,
};
