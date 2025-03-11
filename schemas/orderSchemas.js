import Joi from "joi"; // import JOI for validation

// schema for creating a new order
const orderSchema = Joi.object({
    userId: Joi.number().integer().required(), // userId must be an integer and is required
    products: Joi.array() // products must be an array
        .items(
            Joi.object({
                productId: Joi.number().integer().required(), // ensure productId exists
                quantity: Joi.number().integer().min(1).required(), // ensure quantity is at least 1
            })
        )
        .required(), // products is required
    total: Joi.number().greater(0).required(), // total must be a number greater than 0 and is required
});

// export the schema
export { orderSchema };
