require("dotenv").config();

const optionalConfig = {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || "dev",
};

const requireConfig = {
    DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
};

for (const key in requireConfig) {
    // "null == null" is true, "undefined == null" is also true
    if (requireConfig[key] == null) {
        throw new Error(`Missing value for ${key}`);
    }
}

module.exports = {
    ...optionalConfig,
    ...requireConfig,
}
