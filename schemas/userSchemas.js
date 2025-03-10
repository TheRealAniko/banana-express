import Joi from "joi"; // Import JOI for validation

// Schema for creating a new user
export const userSchema = Joi.object({
    name: Joi.string().min(2).max(100).required().messages({
        "string.min": "Name must be at least 2 characters long",
        "string.max": "Name cannot exceed 100 characters",
        "any.required": "Name is required",
}),
    email: Joi.string().email().required().messages({
        "string.email": "Email must be a valid email address",
        "any.required": "Email is required",
}),
    password: Joi.string().min(6).required().messages({
        "string.min": "Password must be at least 6 characters long",
        "any.required": "Password is required",
}),
});

// Schema for updating an existing user (optional fields, at least one required)
export const updateUserSchema = Joi.object({
    name: Joi.string().min(2).max(100).messages({
        "string.min": "Name must be at least 2 characters long",
        "string.max": "Name cannot exceed 100 characters",
}),
    email: Joi.string().email().messages({
        "string.email": "Email must be a valid email address",
}),
    password: Joi.string().min(6).messages({
        "string.min": "Password must be at least 6 characters long",
}),
}).min(1).messages({
    "object.min": "At least one field (name, email, or password) is required for update",
});