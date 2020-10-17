import Joi from "joi-browser";

function validationJOI(object) {
  const schema = {
    firstName: Joi.string(),
    middleName: Joi.string(),
    lastName: Joi.string(),
    dateOfBirth: Joi.string(),
    country: Joi.string(),
    gender: Joi.string(),
    idType: Joi.string(),
    idNumber: Joi.string().min(10).max(18),
    mobileNumber: Joi.string(),
    secondMobileNumber: Joi.string(),
    Landline: Joi.string(),
    email: Joi.string(),
    RCountry: Joi.string(),
    city: Joi.string(),
    street: Joi.string(),
    zipcode: Joi.string(),
    errors: Joi.any().optional(),
  };

  return Joi.validate(object, schema, { abortEarly: false });
}

export default validationJOI;
