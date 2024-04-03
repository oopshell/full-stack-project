module.exports = (req, res, next) => {
  res.formatResponse = (data, statusCode=200, customObject={}) => {
    const dataKey = statusCode < 400 ? 'data' : 'error';

    const responseData = {
      status: statusCode,
      [dataKey]: data,
      ...customObject,
    }

    res.status(statusCode).json(responseData);
  }
  next();
};

// This formatter can only handle data response, other return types like html can not be handled
