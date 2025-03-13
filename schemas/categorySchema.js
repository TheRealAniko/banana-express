import Joi from "joi";

export const categorySchema = Joi.object({
    id: Joi.forbidden(),
    name: Joi.string().min(3).max(50).required().messages({
        "string.empty": "The name cannot be empty.",
        "string.min": "The name must be at least 3 characters long.",
        "string.max": "The name can be a maximum of 50 characters long.",
        "any.required": "The name is required.",
    }),
});
