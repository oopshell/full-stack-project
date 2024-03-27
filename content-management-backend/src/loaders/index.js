// const myExpress = require("./express");
// const initApp = () => {
//     myExpress.initExpress();
// };

// or

// const initExpress = require("./express").initExpress;
// const initApp = () => {
//     initExpress();
// };

const myExpress = require("./express");
const myLogger = require("./logger");

const initApp = () => {
    const app = myExpress.initExpress();
    const logger = myLogger.initLogger();

    return { app, logger };
};

const { app, logger } = initApp();

module.exports.app = app;
module.exports.logger = logger;
// or
// module.exports = { app, logger };
