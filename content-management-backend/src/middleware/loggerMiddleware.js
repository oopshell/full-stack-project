const loaders = require("../loaders");

module.exports.logFile = (req, res, next) => {
    loaders.logger.info(`HostName: ${req.hostname}, IP: ${req.ip}, Path: ${req.path}`);
    next();
}
