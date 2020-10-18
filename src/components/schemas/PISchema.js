import Joi from "joi-browser";

function PIvalidation(object) {
  const schema = {
    firstName: Joi.string().min(5).max(50).required(),
    middleName: Joi.string().min(5).max(50).required(),
    lastName: Joi.string().min(5).max(50).required(),
    dateOfBirth: Joi.date(),
    country: Joi.string(),
    gender: Joi.string(),
    idType: Joi.string(),
    idNumber: Joi.number().min(10),
    mobileNumber: Joi.number().min(10),
    secondMobileNumber: Joi.number().min(10),
    Landline: Joi.number().min(7),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    RCountry: Joi.string(),
    city: Joi.string(),
    street: Joi.string(),
    zipcode: Joi.string(),
    errors: Joi.any().optional(),
  };

  return Joi.validate(object, schema, { abortEarly: false });
}

export default PIvalidation;
