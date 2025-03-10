import { userSchema, updateUserSchema } from "../schemas/userSchemas.js"

// middleware to validate req body against Joi Schema
export const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false }); // validates all fields
        if (error) {
            return res.status(400).json({
                error: error.details.map((detail) => detail.message),
            });
        }
        next();
    };
};

export const validateUserCreation = validate(userSchema);
export const validateUserUpdate = validate(updateUserSchema);