// a middleware function that handles errors and logs them to the console
const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // log the error stack
  res.status(500).send(err.message || "Something broke!");  // send a response with a status of 500
};

// export the error handler middleware
export default errorHandler;