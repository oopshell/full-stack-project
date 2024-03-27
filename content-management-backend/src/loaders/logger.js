const winston = require("winston");
const { timestamp, combine, align, printf } = winston.format;
// const { combine, timestamp, json } = winston.format;
const path = require("path");

module.exports.initLogger = () => {
    return winston.createLogger({
        format: combine(
            timestamp({ format: "YYYY-MMM-DD hh:mm:ss A" }),
            align(),
            printf((info) => `${info.timestamp} ${info.level} ${info.message}`)
        ),
        transports: [
            new winston.transports.File({
                filename: path.join("storage/logs", "logger.log"),
            })
        ],
    });
}
