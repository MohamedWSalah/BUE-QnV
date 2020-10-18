import Joi from "joi-browser";

function PSvalidation(object) {
  const schema = {
    faculty: Joi.string(),
    mastersProgram: Joi.string(),
    expectedEntryTerm: Joi.string(),
  };

  return Joi.validate(object, schema, { abortEarly: false });
}

export default PSvalidation;
