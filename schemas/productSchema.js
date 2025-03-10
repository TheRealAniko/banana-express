import Joi from "joi";

export const productSchema = Joi.object({
  name: Joi.string().min(3).max(100).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name should be at least 3 characters long",
    "string.max": "Name should be at most 100 characters long",
  }),
  description: Joi.string().min(10).max(1000).required().messages({
    "string.empty": "Description is required",
    "string.min": "Description should be at least 10 characters long",
    "string.max": "Description should be at most 1000 characters long",
  }),
  price: Joi.number().precision(2).positive().required().messages({
    "number.base": "Price must be a number",
    "number.positive": "Price must be positive",
    "any.required": "Price is required",
  }),
  categoryId: Joi.number().integer().required().messages({
    "number.base": "Category ID must be a number",
    "any.required": "Category ID is required",
  }),
});
