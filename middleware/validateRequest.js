import Joi from "joi"; // import JOI for validation

// Validate the request body against the schema
const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false }); // Validate the request body against the schema

    // If there is an error, return a 400 response with the error messages
    if (error) {
      return res.status(400).json({
        message: "Validation failed",
        errors: error.details.map((err) => err.message),
      });
    }

    next(); // Proceed to the next middleware or controller
  };
};

// Export the validateRequest function
export { validateRequest };
