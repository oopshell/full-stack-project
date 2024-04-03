const getLogger = require('../../common/logger');
const config = require('../../config');
const logger = getLogger(__filename);

// Error middleware should have 4 parameters, so do include 'next' even if won't use;
// Otherwise the function with (error, req, res) 3 parameters would be considered as normal middleware
module.exports = (error, req, res, next) => {
  // If this middleware has been triggered, it is an unknown error and system is out of control
  // So this should be an important error that of high priority and should be logged
  logger.error(`${error.message}\n stack: $${error.stack}`);

  res.formatResponse(
    `Something went wrong, please try again in a few minutes`, 
    500, 
    config.NODE_ENV === 'dev' && {stack: error.stack}  // Only return error stack in dev environment because it contains sensitive data
  );
}
