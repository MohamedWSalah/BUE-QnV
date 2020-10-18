import Joi from "joi-browser";

function AIvalidation(object) {
  const schema = {
    university: Joi.string(),
    specialization: Joi.string(),
    graduationDate: Joi.string(),
    GPA: Joi.string(),
    percentage: Joi.string(),
    letterGrade: Joi.string(),
    highestLevelOfEducation: Joi.string(),
  };

  return Joi.validate(object, schema, { abortEarly: false });
}

export default AIvalidation;
