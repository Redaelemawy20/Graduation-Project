import Joi from "joi";
export const newsSchema = {
  title: Joi.string().required().trim(),
  content: Joi.string().required().trim(),
  show: Joi.bool().required(),
  category: Joi.number().required(),
};
